/* Orbita 2027 – veškerý JavaScript webu.
   Klasický skript (ne ES modul), aby fungoval i z file://. Data: window.FESTIVAL_DATA z data.js.
   Stránka se pozná podle <body data-stranka="…">. */
(function () {
  'use strict';

  var D = window.FESTIVAL_DATA;
  if (!D) return;
  var C = D.ciselniky;
  var WEB = D.festival.web + '/';
  var stranka = document.body.getAttribute('data-stranka');

  // ---------- pomocné funkce ----------
  function mapa(arr) { var m = {}; arr.forEach(function (x) { m[x.id] = x; }); return m; }
  var SC = mapa(D.sceny), U = mapa(D.ucinkujici), FI = mapa(D.filmy), PR = mapa(D.program);
  var PROGRAM = D.program.slice().sort(function (a, b) { return cas(a.zacatek) - cas(b.zacatek) || a.id.localeCompare(b.id); });

  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function cas(iso) { return Date.parse(iso); }
  function hm(iso) { return iso.slice(11, 16); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // bez diakritiky a velikosti písmen; po znacích, aby indexy seděly s originálem (kvůli <mark>)
  function foldZnak(ch) {
    var f = ch.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    return f.length === 1 ? f : ch.toLowerCase().charAt(0) || ch;
  }
  function fold(s) { return Array.prototype.map.call(String(s), foldZnak).join(''); }
  function jmeno(u) { return u.jmeno + ' ' + u.prijmeni; }
  function inicialy(u) { return u.jmeno.charAt(0) + u.prijmeni.charAt(0); }
  function plural(n, tvary) { return n + ' ' + (n === 1 ? tvary[0] : n >= 2 && n <= 4 ? tvary[1] : tvary[2]); }
  function vekText(v) { return v ? 'od ' + v + ' let' : 'pro všechny'; }
  var collator = new Intl.Collator('cs');
  var nazvyZemi = (function () {
    try { var dn = new Intl.DisplayNames(['cs'], { type: 'region' }); return function (k) { return dn.of(k); }; }
    catch (e) { return function (k) { return k; }; }
  })();

  function oznam(text) {
    var o = $('#oznameni');
    if (!o) return;
    o.textContent = '';
    setTimeout(function () { o.textContent = text; }, 50);
  }

  function jsonLd(id, obj) {
    var s = document.getElementById(id);
    if (!s) { s = document.createElement('script'); s.type = 'application/ld+json'; s.id = id; document.head.appendChild(s); }
    s.textContent = JSON.stringify(obj);
  }

  // položky, kde účinkující vystupuje (index pro detail a filtr podle dne)
  var polozkyOsoby = {};
  PROGRAM.forEach(function (p) {
    p.ucinkujici.forEach(function (x) { (polozkyOsoby[x.ucinkujiciId] = polozkyOsoby[x.ucinkujiciId] || []).push(p); });
  });
  var projekceFilmu = {};
  PROGRAM.forEach(function (p) { p.filmIds.forEach(function (f) { (projekceFilmu[f] = projekceFilmu[f] || []).push(p); }); });

  // ---------- stav formuláře <-> URL (filtr programu, hostů, filmů) ----------
  function formZUrl(form) {
    var q = new URLSearchParams(location.search);
    $$('input, select', form).forEach(function (el) {
      if (!el.name) return;
      var hodnoty = q.getAll(el.name);
      if (el.type === 'checkbox' || el.type === 'radio') {
        el.checked = hodnoty.indexOf(el.value) !== -1;
      } else if (el.tagName === 'SELECT') {
        var v = q.get(el.name) || '';
        el.value = $$('option', el).some(function (o) { return o.value === v; }) ? v : el.options[0].value;
      }
    });
    // skupina přepínačů bez platné hodnoty z URL -> výchozí volba (value="")
    $$('input[type="radio"][value=""]', form).forEach(function (el) {
      if (!form.querySelector('input[type="radio"][name="' + el.name + '"]:checked')) el.checked = true;
    });
  }
  function urlZFormu(form) {
    var q = new URLSearchParams();
    new FormData(form).forEach(function (v, k) { if (v !== '') q.append(k, v); });
    var s = q.toString();
    history.replaceState(null, '', location.pathname + (s ? '?' + s : '') + location.hash);
  }
  function napojFiltr(form, render) {
    formZUrl(form);
    var odeslat = $('[type="submit"]', form);
    if (odeslat) odeslat.hidden = true; // s JS se filtruje okamžitě
    function zmena() { urlZFormu(form); render(true); }
    form.addEventListener('change', zmena);
    form.addEventListener('submit', function (e) { e.preventDefault(); zmena(); });
    render(false);
  }
  function aktivniKriteria(form) {
    var n = 0;
    new FormData(form).forEach(function (v) { if (v !== '') n++; });
    return n;
  }

  function prejdiNaKotvu() {
    if (!location.hash) return;
    var cil = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!cil) return;
    cil.classList.add('zvyrazneno');
    cil.setAttribute('tabindex', '-1');
    cil.scrollIntoView();
    cil.focus({ preventScroll: true });
  }

  // ---------- Můj program (localStorage) ----------
  var KLIC = 'orbita.mujProgram.v1';
  var ulozeno = {
    nacti: function () {
      try {
        var a = JSON.parse(localStorage.getItem(KLIC) || '[]');
        return Array.isArray(a) ? a.filter(function (id) { return PR[id]; }) : [];
      } catch (e) { return []; }
    },
    uloz: function (a) {
      try { localStorage.setItem(KLIC, JSON.stringify(a)); return true; } catch (e) { return false; }
    },
    ma: function (id) { return this.nacti().indexOf(id) !== -1; },
    prepni: function (id) { // vrací nový stav, nebo null při chybě úložiště
      var a = this.nacti(), i = a.indexOf(id);
      if (i === -1) a.push(id); else a.splice(i, 1);
      return this.uloz(a) ? i === -1 : null;
    }
  };

  function tlacitkoUlozit(id) {
    var on = ulozeno.ma(id);
    return '<button type="button" class="ulozit" data-ulozit="' + id + '" data-ulozeno="' + on + '" aria-describedby="' + id + '-n">' +
      (on ? '★ Odebrat z Můj program' : '☆ Uložit do Můj program') + '</button>';
  }
  function nastavTlacitko(b, on) {
    b.setAttribute('data-ulozeno', String(on));
    b.textContent = on ? '★ Odebrat z Můj program' : '☆ Uložit do Můj program';
  }
  function aktualizujPocet() {
    var n = ulozeno.nacti().length;
    $$('[data-pocet]').forEach(function (el) { el.textContent = n ? '\u00a0(' + n + ')' : ''; });
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-ulozit]');
    if (!b) return;
    var id = b.getAttribute('data-ulozit');
    var on = ulozeno.prepni(id);
    if (on === null) { oznam('Uložení se nezdařilo: prohlížeč nepovoluje ukládání dat (např. v anonymním režimu).'); return; }
    $$('[data-ulozit="' + id + '"]').forEach(function (x) { nastavTlacitko(x, on); });
    aktualizujPocet();
    oznam('„' + PR[id].nazev + '“ ' + (on ? 'uloženo do Můj program.' : 'odebráno z Můj program.'));
    if (stranka === 'muj-program') { mujProgram(); var h = $('h1'); h.setAttribute('tabindex', '-1'); h.focus(); }
  });
  window.addEventListener('storage', function (e) {
    if (e.key !== KLIC) return;
    aktualizujPocet();
    $$('[data-ulozit]').forEach(function (b) { nastavTlacitko(b, ulozeno.ma(b.getAttribute('data-ulozit'))); });
    if (stranka === 'muj-program') mujProgram();
  });

  // ---------- karta programové položky ----------
  function odkazOsoby(x) {
    var role = x.role === 'host' ? '' : ' (' + C.roleVPolozce[x.role].toLowerCase() + ')';
    return '<a href="ucinkujici-detail.html?id=' + x.ucinkujiciId + '">' + esc(jmeno(U[x.ucinkujiciId])) + '</a>' + role;
  }
  function karta(p, h, moznosti) {
    moznosti = moznosti || {};
    var s = SC[p.sceneId];
    var filmy = p.filmIds.map(function (id) { return '<a href="filmy.html#' + id + '">' + esc(FI[id].nazev) + '</a>'; }).join(', ');
    var lide = p.ucinkujici.map(odkazOsoby).join(', ');
    var html = '<article class="polozka typ-' + p.typ + '" id="' + p.id + '">' +
      '<h' + h + ' id="' + p.id + '-n">' + esc(p.nazev) + '</h' + h + '>' +
      '<p class="polozka__meta">' + (moznosti.den ? esc(C.dny[p.den]) + ', ' : '') +
      '<time datetime="' + p.zacatek + '">' + hm(p.zacatek) + '</time>–<time datetime="' + p.konec + '">' + hm(p.konec) + '</time>' +
      ' · <a href="sceny.html#' + s.id + '">' + esc(s.nazev) + '</a></p>' +
      '<ul class="stitky"><li class="stitek">' + C.typ[p.typ] + '</li><li class="stitek">' + vekText(p.vekOd) + '</li>' +
      (p.vstup !== 'v-cene' ? '<li class="stitek stitek--akcent">' + C.vstup[p.vstup] + '</li>' : '') + '</ul>' +
      '<p>' + esc(p.popis) + '</p>' +
      (filmy ? '<p>' + (p.filmIds.length > 1 ? 'Filmy: ' : 'Film: ') + filmy + '</p>' : '') +
      (lide ? '<p>Účinkují: ' + lide + '</p>' : '') +
      (p.typ === 'pozorovani' ? oblohaVKarte(p.den) : '') +
      (moznosti.navic || '') +
      tlacitkoUlozit(p.id) +
      '</article>';
    return html;
  }
  function oblohaVKarte(den) {
    var o = obloha(den);
    return '<p>' + (o ? 'Obloha: úplná tma od ' + o.konecAstronomickehoSoumraku + ', Měsíc zapadá v ' + o.mesic.zapad +
      ', až ' + o.perseidyOdhadZHR + ' meteorů za hodinu (' + C.hodnoceni[o.hodnoceni].toLowerCase() + ' podmínky). ' : '') +
      '<a href="obloha.html#vecer-' + den + '">Podmínky na obloze tento večer</a></p>';
  }
  function seznamKaret(polozky, h, moznosti) {
    return '<ul class="seznam seznam--mrizka">' + polozky.map(function (p) { return '<li>' + karta(p, h, moznosti) + '</li>'; }).join('') + '</ul>';
  }
  function odkazNaPolozku(p) { return 'program.html?den=' + p.den + '#' + p.id; }

  function ldUdalost(p) {
    var o = {
      '@type': p.typ === 'projekce' ? 'ScreeningEvent' : 'Event',
      name: p.nazev,
      startDate: p.zacatek,
      endDate: p.konec,
      description: p.popis,
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: { '@type': 'Place', name: SC[p.sceneId].nazev + ', ' + D.festival.misto.nazev, address: D.festival.kontakt.adresa },
      url: WEB + odkazNaPolozku(p)
    };
    if (p.filmIds.length === 1) o.workPresented = { '@type': 'Movie', name: FI[p.filmIds[0]].nazev };
    if (p.ucinkujici.length) o.performer = p.ucinkujici.map(function (x) { return { '@type': 'Person', name: jmeno(U[x.ucinkujiciId]) }; });
    return o;
  }

  // ---------- mobilní menu ----------
  (function () {
    var b = $('.menu-tlacitko'), nav = $('.hlavni-nav');
    if (!b || !nav) return;
    b.hidden = false;
    b.addEventListener('click', function () {
      var otevrit = b.getAttribute('aria-expanded') !== 'true';
      b.setAttribute('aria-expanded', String(otevrit));
      nav.classList.toggle('otevreno', otevrit);
    });
  })();

  // ================= STRÁNKY =================

  // ---------- A) Program s filtrem ----------
  function program() {
    var form = $('#filtr-programu'), vystup = $('#vysledky'), stav = $('#stav'), details = $('.filtr'), souhrn = $('.filtr > summary');
    if (window.matchMedia('(max-width: 47.99em)').matches && location.search) details.open = false;

    function render(zUzivatele) {
      var f = new FormData(form);
      var den = f.get('den') || '', sceny = f.getAll('scena'), typy = f.getAll('typ'),
        zanr = f.get('zanr') || '', vek = f.get('vek') || '', bezb = f.get('bezbarierove') === '1';
      var vysledek = PROGRAM.filter(function (p) {
        return (!den || p.den === den) &&
          (!sceny.length || sceny.indexOf(p.sceneId) !== -1) &&
          (!typy.length || typy.indexOf(p.typ) !== -1) &&
          (!zanr || p.filmIds.some(function (id) { return FI[id].subzanr.indexOf(zanr) !== -1; })) &&
          (vek === '' || p.vekOd <= Number(vek)) &&
          (!bezb || SC[p.sceneId].pristupnost.bezbarierova === 'ano');
      });
      var n = aktivniKriteria(form);
      souhrn.textContent = 'Filtr programu' + (n ? ' (' + plural(n, ['aktivní', 'aktivní', 'aktivních']) + ')' : '');

      if (!vysledek.length) {
        vystup.innerHTML = '<p>Žádná položka programu neodpovídá zvolenému filtru. <a href="program.html">Zrušit filtry</a></p>';
      } else {
        var dny = {};
        vysledek.forEach(function (p) { (dny[p.den] = dny[p.den] || []).push(p); });
        vystup.innerHTML = Object.keys(dny).sort().map(function (d) {
          return '<section aria-labelledby="den-' + d + '"><h2 id="den-' + d + '">' + esc(C.dny[d]) +
            ' <small class="meta">(' + plural(dny[d].length, ['položka', 'položky', 'položek']) + ')</small></h2>' +
            seznamKaret(dny[d], 3) + '</section>';
        }).join('');
      }
      var text = vysledek.length ? 'Nalezeno: ' + plural(vysledek.length, ['položka', 'položky', 'položek']) + '.' : 'Nenalezena žádná položka.';
      stav.textContent = zUzivatele ? '' : text;
      if (zUzivatele) setTimeout(function () { stav.textContent = text; }, 50);

      jsonLd('ld-program', {
        '@context': 'https://schema.org', '@type': 'ItemList', name: 'Program festivalu Orbita 2027',
        itemListElement: vysledek.map(function (p, i) { return { '@type': 'ListItem', position: i + 1, item: ldUdalost(p) }; })
      });
      if (!zUzivatele) prejdiNaKotvu();
    }
    napojFiltr(form, render);

    var kopirovat = $('#kopirovat-odkaz');
    kopirovat.hidden = false;
    kopirovat.addEventListener('click', function () {
      var url = location.href;
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(url).then(function () { oznam('Odkaz na výběr zkopírován do schránky.'); },
          function () { ukazOdkaz(url); });
      } else ukazOdkaz(url);
    });
    function ukazOdkaz(url) {
      var pole = $('#odkaz-vyberu');
      pole.hidden = false;
      var input = $('input', pole);
      input.value = url;
      input.focus();
      input.select();
      oznam('Odkaz nelze zkopírovat automaticky. Je označený v poli Odkaz na výběr, zkopírujte jej klávesami Ctrl+C.');
    }
  }

  // ---------- D) Hosté a tvůrci ----------
  function ucinkujici() {
    var form = $('#filtr-hostu'), vystup = $('#vysledky'), stav = $('#stav');
    function render(zUzivatele) {
      var f = new FormData(form), role = f.get('role') || '', den = f.get('den') || '', razeni = f.get('razeni') || 'az';
      var seznam = D.ucinkujici.filter(function (u) {
        return (!role || u.role.indexOf(role) !== -1) &&
          (!den || (polozkyOsoby[u.id] || []).some(function (p) { return p.den === den; }));
      }).sort(function (a, b) {
        var r = collator.compare(a.prijmeni, b.prijmeni) || collator.compare(a.jmeno, b.jmeno);
        return razeni === 'za' ? -r : r;
      });
      vystup.innerHTML = seznam.length ? '<ul class="seznam seznam--mrizka">' + seznam.map(function (u) {
        return '<li><article class="karta osoba"><span class="avatar" aria-hidden="true">' + esc(inicialy(u)) + '</span><div>' +
          '<h2><a href="ucinkujici-detail.html?id=' + u.id + '">' + esc(jmeno(u)) + '</a></h2>' +
          '<p class="meta">' + u.role.map(function (r) { return C.role[r]; }).join(', ') + (u.obor ? ' · ' + esc(u.obor) : '') + '</p>' +
          '<p>' + plural((polozkyOsoby[u.id] || []).length, ['vystoupení', 'vystoupení', 'vystoupení']) + ' na festivalu</p>' +
          '</div></article></li>';
      }).join('') + '</ul>' : '<p>Filtru neodpovídá nikdo. <a href="ucinkujici.html">Zrušit filtry</a></p>';
      var text = 'Zobrazeno: ' + plural(seznam.length, ['host nebo tvůrce', 'hosté a tvůrci', 'hostů a tvůrců']) + '.';
      stav.textContent = '';
      setTimeout(function () { stav.textContent = text; }, zUzivatele ? 50 : 0);
      jsonLd('ld-seznam', {
        '@context': 'https://schema.org', '@type': 'ItemList', name: 'Hosté a tvůrci festivalu Orbita 2027',
        itemListElement: seznam.map(function (u, i) { return { '@type': 'ListItem', position: i + 1, url: WEB + 'ucinkujici-detail.html?id=' + u.id, name: jmeno(u) }; })
      });
    }
    napojFiltr(form, render);
  }

  // ---------- detail hosta / tvůrce ----------
  function detail() {
    var id = new URLSearchParams(location.search).get('id');
    var u = id && U[id], obsah = $('#detail');
    if (!u) {
      document.title = 'Host nenalezen – Orbita 2027';
      obsah.innerHTML = '<h1>Host nenalezen</h1><p>Hledaný host nebo tvůrce v programu není. Zkuste <a href="ucinkujici.html">seznam hostů a tvůrců</a> nebo vyhledávání.</p>';
      return;
    }
    var nazev = jmeno(u), polozky = polozkyOsoby[u.id] || [];
    var filmy = D.filmy.filter(function (f) { return f.stab.some(function (s) { return s.ucinkujiciId === u.id; }); });
    var popis = nazev + ' (' + u.role.map(function (r) { return C.role[r].toLowerCase(); }).join(', ') + ') na festivalu Orbita 2027: ' + u.medailon;

    document.title = nazev + ' – Hosté a tvůrci – Orbita 2027';
    $('meta[name="description"]').setAttribute('content', popis.slice(0, 160));
    var url = WEB + 'ucinkujici-detail.html?id=' + u.id;
    $('link[rel="canonical"]').setAttribute('href', url);
    $('meta[property="og:url"]').setAttribute('content', url);
    $('meta[property="og:title"]').setAttribute('content', document.title);
    $('meta[property="og:description"]').setAttribute('content', popis.slice(0, 200));
    $('#drobek-aktualni').textContent = nazev;

    obsah.innerHTML =
      '<div class="osoba"><span class="avatar avatar--velky" aria-hidden="true">' + esc(inicialy(u)) + '</span><div>' +
      '<h1>' + esc(nazev) + '</h1>' +
      '<p class="meta">' + u.role.map(function (r) { return C.role[r]; }).join(', ') + (u.obor ? ' · ' + esc(u.obor) : '') + ' · ' + esc(nazvyZemi(u.zeme)) + '</p>' +
      '</div></div>' +
      '<p>' + esc(u.medailon) + '</p>' +
      '<section aria-labelledby="h-vystoupeni"><h2 id="h-vystoupeni">Na festivalu (' + polozky.length + ')</h2>' +
      seznamKaret(polozky, 3, { den: true }) + '</section>' +
      (filmy.length ? '<section aria-labelledby="h-filmy"><h2 id="h-filmy">Filmy na festivalu</h2><ul>' + filmy.map(function (f) {
        var role = f.stab.filter(function (s) { return s.ucinkujiciId === u.id; }).map(function (s) { return C.roleVeStabu[s.role].toLowerCase(); }).join(', ');
        return '<li><a href="filmy.html#' + f.id + '">' + esc(f.nazev) + '</a> (' + f.rok + ', ' + f.delkaMin + ' min) – ' + role + '</li>';
      }).join('') + '</ul></section>' : '');

    jsonLd('ld-osoba', {
      '@context': 'https://schema.org', '@type': 'Person', name: nazev, description: u.medailon, url: url,
      jobTitle: u.role.map(function (r) { return C.role[r]; }).join(', '),
      nationality: { '@type': 'Country', name: nazvyZemi(u.zeme) },
      performerIn: polozky.map(ldUdalost)
    });
  }

  // ---------- D) Filmy ----------
  function filmy() {
    var form = $('#filtr-filmu'), vystup = $('#vysledky'), stav = $('#stav');
    var razeni = {
      nazev: function (a, b) { return collator.compare(a.nazev, b.nazev); },
      'rok-novejsi': function (a, b) { return b.rok - a.rok || collator.compare(a.nazev, b.nazev); },
      'rok-starsi': function (a, b) { return a.rok - b.rok || collator.compare(a.nazev, b.nazev); },
      'delka-kratsi': function (a, b) { return a.delkaMin - b.delkaMin; },
      'delka-delsi': function (a, b) { return b.delkaMin - a.delkaMin; }
    };
    function render(zUzivatele) {
      var f = new FormData(form), zanr = f.get('zanr') || '', delka = f.get('delka') || '', r = razeni[f.get('razeni')] || razeni.nazev;
      var seznam = D.filmy.filter(function (x) {
        return (!zanr || x.subzanr.indexOf(zanr) !== -1) &&
          (!delka || (delka === 'kratky') === (x.subzanr.indexOf('kratky') !== -1));
      }).sort(r);
      vystup.innerHTML = seznam.length ? '<ul class="seznam seznam--mrizka">' + seznam.map(function (x) {
        var projekce = projekceFilmu[x.id] || [];
        return '<li><article class="karta" id="' + x.id + '">' +
          '<h2>' + esc(x.nazev) + '</h2>' +
          '<p class="meta">' + (x.nazevOriginal !== x.nazev ? esc(x.nazevOriginal) + ' · ' : '') +
          x.rok + ' · ' + x.delkaMin + ' min · ' + x.zeme.map(nazvyZemi).map(esc).join(', ') + '</p>' +
          '<ul class="stitky">' + x.subzanr.map(function (z) { return '<li class="stitek">' + C.subzanr[z] + '</li>'; }).join('') +
          '<li class="stitek">' + vekText(x.vekovaPristupnost) + '</li>' +
          (x.soutez ? '<li class="stitek stitek--akcent">Soutěž krátkých filmů</li>' : '') + '</ul>' +
          '<p>' + esc(x.anotace) + '</p>' +
          '<p>Jazyk: ' + esc(x.jazyk) + (x.titulky ? ', titulky: ' + esc(x.titulky) : '') + '</p>' +
          '<p>Tvůrci: ' + x.stab.map(function (s) {
            return '<a href="ucinkujici-detail.html?id=' + s.ucinkujiciId + '">' + esc(jmeno(U[s.ucinkujiciId])) + '</a> (' + C.roleVeStabu[s.role].toLowerCase() + ')';
          }).join(', ') + '</p>' +
          '<h3>Projekce</h3><ul>' + projekce.map(function (p) {
            return '<li><a href="' + odkazNaPolozku(p) + '">' + esc(C.dny[p.den]) + ', ' + hm(p.zacatek) + '</a> – ' + esc(SC[p.sceneId].nazev) +
              (p.filmIds.length > 1 ? ' (' + esc(p.nazev) + ')' : '') + '</li>';
          }).join('') + '</ul>' +
          '</article></li>';
      }).join('') + '</ul>' : '<p>Filtru neodpovídá žádný film. <a href="filmy.html">Zrušit filtry</a></p>';
      var text = 'Zobrazeno: ' + plural(seznam.length, ['film', 'filmy', 'filmů']) + '.';
      stav.textContent = '';
      setTimeout(function () { stav.textContent = text; }, zUzivatele ? 50 : 0);
      jsonLd('ld-seznam', {
        '@context': 'https://schema.org', '@type': 'ItemList', name: 'Filmy festivalu Orbita 2027',
        itemListElement: seznam.map(function (x, i) {
          return {
            '@type': 'ListItem', position: i + 1, item: {
              '@type': 'Movie', name: x.nazev, dateCreated: String(x.rok), duration: 'PT' + x.delkaMin + 'M', description: x.anotace,
              url: WEB + 'filmy.html#' + x.id,
              director: x.stab.filter(function (s) { return s.role === 'rezie'; }).map(function (s) { return { '@type': 'Person', name: jmeno(U[s.ucinkujiciId]) }; })
            }
          };
        })
      });
      if (!zUzivatele) prejdiNaKotvu();
    }
    napojFiltr(form, render);
  }

  // ---------- C) Vyhledávání ----------
  function zvyrazni(text, slova) {
    var f = fold(text), znacky = new Array(text.length + 1).join('0').split('').map(Number);
    slova.forEach(function (w) {
      var i = f.indexOf(w);
      while (i !== -1) { for (var k = i; k < i + w.length; k++) znacky[k] = 1; i = f.indexOf(w, i + w.length); }
    });
    var out = '', v = false;
    for (var j = 0; j < text.length; j++) {
      if (znacky[j] && !v) { out += '<mark>'; v = true; }
      if (!znacky[j] && v) { out += '</mark>'; v = false; }
      out += esc(text.charAt(j));
    }
    return out + (v ? '</mark>' : '');
  }
  function hledat() {
    var q = (new URLSearchParams(location.search).get('q') || '').trim();
    var vystup = $('#vysledky'), stav = $('#stav');
    var slova = fold(q).split(/\s+/).filter(Boolean);
    if (!q) { vystup.innerHTML = '<p>Zadejte hledaný výraz do pole v záhlaví stránky – například jméno hosta, název filmu nebo téma (Perseidy, AI, klima).</p>'; return; }
    $('h1').textContent = 'Výsledky hledání „' + q + '“';
    document.title = 'Hledání: ' + q + ' – Orbita 2027';
    if (q.length < 2) { stav.textContent = 'Zadejte alespoň 2 znaky.'; return; }

    function sedi(text) { var f = fold(text); return slova.every(function (w) { return f.indexOf(w) !== -1; }); }
    var hoste = D.ucinkujici.filter(function (u) {
      return sedi([jmeno(u), u.role.map(function (r) { return C.role[r]; }).join(' '), u.obor || ''].join(' '));
    });
    var filmyV = D.filmy.filter(function (x) {
      return sedi([x.nazev, x.nazevOriginal, x.anotace, x.subzanr.map(function (z) { return C.subzanr[z]; }).join(' '),
        x.stab.map(function (s) { return jmeno(U[s.ucinkujiciId]); }).join(' ')].join(' '));
    });
    var polozky = PROGRAM.filter(function (p) {
      return sedi([p.nazev, p.popis, SC[p.sceneId].nazev, C.typ[p.typ], p.tagy.map(function (t) { return C.tagy[t]; }).join(' '),
        p.ucinkujici.map(function (x) { return jmeno(U[x.ucinkujiciId]); }).join(' '),
        p.filmIds.map(function (id) { return FI[id].nazev; }).join(' ')].join(' '));
    });
    var celkem = hoste.length + filmyV.length + polozky.length;

    function sekce(id, nadpis, pole, polozka) {
      return '<section aria-labelledby="' + id + '"><h2 id="' + id + '">' + nadpis + ' (' + pole.length + ')</h2>' +
        (pole.length ? '<ul>' + pole.map(polozka).join('') + '</ul>' : '<p>Nic nenalezeno.</p>') + '</section>';
    }
    vystup.innerHTML = celkem ? (
      sekce('h-hoste', 'Hosté a tvůrci', hoste, function (u) {
        return '<li><a href="ucinkujici-detail.html?id=' + u.id + '">' + zvyrazni(jmeno(u), slova) + '</a> – ' +
          u.role.map(function (r) { return C.role[r].toLowerCase(); }).join(', ') + (u.obor ? ', ' + zvyrazni(u.obor, slova) : '') + '</li>';
      }) +
      sekce('h-filmy', 'Filmy', filmyV, function (x) {
        return '<li><a href="filmy.html#' + x.id + '">' + zvyrazni(x.nazev, slova) + '</a> (' + x.rok + ') – režie ' +
          x.stab.filter(function (s) { return s.role === 'rezie'; }).map(function (s) { return zvyrazni(jmeno(U[s.ucinkujiciId]), slova); }).join(', ') + '</li>';
      }) +
      sekce('h-program', 'Program', polozky, function (p) {
        return '<li><a href="' + odkazNaPolozku(p) + '">' + zvyrazni(p.nazev, slova) + '</a> – ' + esc(C.dny[p.den]) + ' ' + hm(p.zacatek) +
          ', ' + esc(SC[p.sceneId].nazev) + ' (' + C.typ[p.typ].toLowerCase() + ')</li>';
      })
    ) : '<p>Pro „' + esc(q) + '“ jsme nic nenašli. Zkuste jen příjmení, část názvu filmu nebo obecnější téma. Můžete také projít <a href="program.html">celý program</a> nebo <a href="ucinkujici.html">seznam hostů a tvůrců</a>.</p>';
    stav.textContent = celkem
      ? 'Nalezeno: ' + plural(celkem, ['výsledek', 'výsledky', 'výsledků']) + ' – hosté a tvůrci: ' + hoste.length + ', filmy: ' + filmyV.length + ', program: ' + polozky.length + '.'
      : 'Nic nenalezeno.';
  }

  // ---------- B) Můj program + F) export .ics ----------
  function kolize(polozky) {
    var k = {};
    polozky.forEach(function (a) {
      polozky.forEach(function (b) {
        if (a === b) return;
        var od = Math.max(cas(a.zacatek), cas(b.zacatek)), do_ = Math.min(cas(a.konec), cas(b.konec));
        if (od < do_) (k[a.id] = k[a.id] || []).push({ p: b, min: Math.round((do_ - od) / 60000) });
      });
    });
    return k;
  }
  function mujProgram() {
    var vystup = $('#vysledky'), akce = $('#akce-mp');
    var ids = ulozeno.nacti();
    var polozky = PROGRAM.filter(function (p) { return ids.indexOf(p.id) !== -1; });
    var kol = kolize(polozky);
    akce.hidden = !polozky.length;
    if (!polozky.length) {
      vystup.innerHTML = '<p>Zatím nemáte nic uloženo. V <a href="program.html">programu</a> nebo u <a href="ucinkujici.html">hostů a tvůrců</a> klikněte u položky na „Uložit do Můj program“.</p>';
      $('#stav').textContent = 'Můj program je prázdný.';
      return;
    }
    var pocetKolizi = Object.keys(kol).length;
    $('#stav').textContent = 'Uloženo: ' + plural(polozky.length, ['položka', 'položky', 'položek']) +
      (pocetKolizi ? '. Časové kolize: ' + plural(pocetKolizi, ['položka', 'položky', 'položek']) : ', bez časových kolizí') + '.';
    var dny = {};
    polozky.forEach(function (p) { (dny[p.den] = dny[p.den] || []).push(p); });
    vystup.innerHTML = Object.keys(dny).sort().map(function (d) {
      return '<section aria-labelledby="den-' + d + '"><h2 id="den-' + d + '">' + esc(C.dny[d]) + '</h2>' +
        '<ul class="seznam seznam--mrizka">' + dny[d].map(function (p) {
          var navic = (kol[p.id] || []).map(function (x) {
            var mekka = p.typ === 'pozorovani' || x.p.typ === 'pozorovani';
            return '<p class="kolize">Překrývá se s „' + esc(x.p.nazev) + '“ (' + hm(x.p.zacatek) + '–' + hm(x.p.konec) + ', ' + esc(SC[x.p.sceneId].nazev) + ') o ' + x.min + ' min.' +
              (mekka ? ' Na pozorování můžete přijít i později, běží průběžně.' : '') + '</p>';
          }).join('');
          if (cas(p.konec) >= cas(p.den + 'T23:00:00+02:00')) navic += '<p><a href="prakticke-informace.html#doprava">Doprava domů po skončení</a></p>';
          return '<li>' + karta(p, 3, { navic: navic }) + '</li>';
        }).join('') + '</ul></section>';
    }).join('');
  }

  function icsText(s) { return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n'); }
  function icsCas(iso) { return new Date(iso).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''); }
  function icsZalom(radek) { // RFC 5545: max 75 oktetů na řádek
    var enc = new TextEncoder(), out = [], akt = '', delka = 0;
    Array.from(radek).forEach(function (ch) {
      var b = enc.encode(ch).length;
      if (delka + b > (out.length ? 74 : 75)) { out.push(akt); akt = ''; delka = 0; }
      akt += ch; delka += b;
    });
    out.push(akt);
    return out.join('\r\n ');
  }
  function stahniIcs() {
    var ids = ulozeno.nacti(), ted = icsCas(new Date().toISOString());
    var r = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Orbita 2027//Muj program//CS', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'X-WR-CALNAME:Orbita 2027 – Můj program'];
    PROGRAM.filter(function (p) { return ids.indexOf(p.id) !== -1; }).forEach(function (p) {
      r.push('BEGIN:VEVENT', 'UID:' + p.id + '@orbita-festival.example', 'DTSTAMP:' + ted,
        'DTSTART:' + icsCas(p.zacatek), 'DTEND:' + icsCas(p.konec),
        'SUMMARY:' + icsText(p.nazev),
        'LOCATION:' + icsText(SC[p.sceneId].nazev + ', ' + D.festival.kontakt.adresa),
        'DESCRIPTION:' + icsText(p.popis), 'URL:' + WEB + odkazNaPolozku(p), 'END:VEVENT');
    });
    r.push('END:VCALENDAR');
    var blob = new Blob([r.map(icsZalom).join('\r\n') + '\r\n'], { type: 'text/calendar;charset=utf-8' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'orbita-2027-muj-program.ics';
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    oznam('Soubor orbita-2027-muj-program.ics se stahuje.');
  }

  // ---------- E) Teď a za chvíli (úvod) ----------
  function prazskyCas(d) { // "YYYY-MM-DDTHH:MM" v čase Europe/Prague
    return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Prague', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' })
      .format(d).replace(' ', 'T');
  }
  function obloha(datum) { return D.obloha.filter(function (o) { return o.datum === datum; })[0]; }
  function uvod() {
    var sekce = $('#ted'), input = $('#simulovany-cas'), vystup = $('#ted-vysledky'), info = $('#ted-info');
    sekce.hidden = false;
    var ted = prazskyCas(new Date());
    var behem = ted >= input.min && ted <= input.max;
    input.value = behem ? ted : '2027-08-13T21:00';
    info.textContent = behem ? 'Zobrazuje se aktuální čas. Můžete jej změnit.' : 'Festival teď neprobíhá, proto ukazujeme simulovaný čas. Můžete jej změnit.';

    function radek(p, kdy) {
      return '<li><a href="' + odkazNaPolozku(p) + '">' + esc(p.nazev) + '</a> – ' + esc(SC[p.sceneId].nazev) + ', ' + kdy + '</li>';
    }
    function render() {
      if (!input.value) return;
      var t = cas(input.value + ':00+02:00'), za = t + 3600000;
      var bezi = PROGRAM.filter(function (p) { return cas(p.zacatek) <= t && t < cas(p.konec); });
      var brzy = PROGRAM.filter(function (p) { return t < cas(p.zacatek) && cas(p.zacatek) <= za; });
      // večer, ke kterému patří noc (před 6:00 ráno = předchozí den)
      var d = new Date(t - (6 - 2) * 3600000).toISOString().slice(0, 10), o = obloha(d);
      vystup.innerHTML =
        '<h3>Právě probíhá</h3>' + (bezi.length ? '<ul>' + bezi.map(function (p) { return radek(p, 'do ' + hm(p.konec)); }).join('') + '</ul>' : '<p>V tuto chvíli nic neprobíhá.</p>') +
        '<h3>Začíná do hodiny</h3>' + (brzy.length ? '<ul>' + brzy.map(function (p) { return radek(p, 'od ' + hm(p.zacatek)); }).join('') + '</ul>' : '<p>V příští hodině nic nezačíná.</p>') +
        (o ? '<h3>Obloha tento večer</h3><p>Úplná tma od ' + o.konecAstronomickehoSoumraku + ', Měsíc zapadá v ' + o.mesic.zapad +
          ', odhad až ' + o.perseidyOdhadZHR + ' meteorů za hodinu. Podmínky: ' + C.hodnoceni[o.hodnoceni].toLowerCase() +
          '. <a href="obloha.html#vecer-' + o.datum + '">Podrobnosti</a></p>' : '');
    }
    input.addEventListener('change', render);
    render();
  }

  // ---------- E2) Dnešní obloha ----------
  function oblohaStranka() {
    var dnes = prazskyCas(new Date()).slice(0, 10), vystup = $('#obloha-tabulka');
    vystup.innerHTML = '<div class="tabulka" role="region" aria-labelledby="obloha-titulek" tabindex="0"><table>' +
      '<caption id="obloha-titulek">Podmínky pro pozorování po festivalových večerech</caption>' +
      '<thead><tr><th scope="col">Večer</th><th scope="col">Západ Slunce</th><th scope="col">Úplná tma</th><th scope="col">Měsíc</th>' +
      '<th scope="col">Začátek pozorování</th><th scope="col">Meteorů za hodinu (ZHR)</th><th scope="col">Podmínky</th></tr></thead><tbody>' +
      D.obloha.map(function (o) {
        return '<tr id="vecer-' + o.datum + '"' + (o.datum === dnes ? ' class="dnes"' : '') + '>' +
          '<th scope="row"><time datetime="' + o.datum + '">' + esc(C.dny[o.datum]) + '</time></th>' +
          '<td>' + o.zapadSlunce + '</td><td>' + o.konecAstronomickehoSoumraku + '</td>' +
          '<td>' + esc(o.mesic.faze) + ', osvětlen z ' + o.mesic.osvetleniProcent + ' %, zapadá v ' + o.mesic.zapad + '</td>' +
          '<td><a href="program.html?den=' + o.datum + '&amp;typ=pozorovani">' + o.zacatekPozorovani + '</a></td>' +
          '<td>až ' + o.perseidyOdhadZHR + '</td>' +
          '<td><strong>' + C.hodnoceni[o.hodnoceni] + '.</strong> ' + esc(o.poznamka) + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      (D.obloha.some(function (o) { return !o.overeno; }) ? '<p class="meta">Časy jsou orientační a mohou se o několik minut lišit.</p>' : '');
    prejdiNaKotvu();
  }

  // ---------- vstupenky (simulace nákupu) ----------
  function vstupenky() {
    var form = $('#nakup'), vyst = $('#cena'), stav = $('#stav');
    function spocitej() {
      var opt = form.typ.options[form.typ.selectedIndex], n = Math.max(1, Math.min(10, parseInt(form.pocet.value, 10) || 1));
      var cena = Number(opt.getAttribute('data-cena')) * n;
      vyst.textContent = cena.toLocaleString('cs-CZ') + ' Kč';
      return { nazev: opt.textContent, n: n, cena: cena };
    }
    form.addEventListener('input', spocitej);
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var s = spocitej();
      stav.textContent = 'Toto je ukázkový web – nákup neproběhl a nic se neplatí. Vybrali jste: ' + s.nazev + ', ' + s.n + ' ks, celkem ' + s.cena.toLocaleString('cs-CZ') + ' Kč.';
    });
    spocitej();
  }

  // ---------- spuštění ----------
  aktualizujPocet();
  var q = new URLSearchParams(location.search).get('q');
  if (q && $('#q')) $('#q').value = q;

  var stranky = {
    'program': program, 'ucinkujici': ucinkujici, 'ucinkujici-detail': detail, 'filmy': filmy, 'hledat': hledat,
    'muj-program': function () { mujProgram(); $('#stahnout-ics').addEventListener('click', stahniIcs); $('#tisk').addEventListener('click', function () { window.print(); }); },
    'uvod': uvod, 'obloha': oblohaStranka, 'vstupenky': vstupenky
  };
  if (stranky[stranka]) stranky[stranka]();
})();
