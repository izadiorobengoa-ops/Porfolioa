/* ==========================================================================
   Izadi Orobengoa · Portfolioa · main.js
   Mendekotasunik gabe. Edukia js/content.js fitxategitik dator.
   ========================================================================== */
(function () {
  "use strict";

  var C = window.CONTENT;
  if (!C) { return; }
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  document.documentElement.classList.add("js");

  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function icon(n, extra) { return '<svg class="ic' + (extra ? " " + extra : "") + '" aria-hidden="true"><use href="#i-' + n + '"/></svg>'; }
  function pad(n) { return (n < 10 ? "0" : "") + n; }

  /* ---------- Izenburuak: hitzez hitz ---------- */
  function words(el, text) {
    el.innerHTML = String(text).split(" ").map(function (w, i) {
      return '<span class="w" style="--i:' + i + '"><span>' + esc(w) + "</span></span>";
    }).join(" ");
    el.setAttribute("aria-label", text);
    $$(".w", el).forEach(function (w) { w.setAttribute("aria-hidden", "true"); });
  }

  /* ---------- YouTube "lite" ---------- */
  function thumb(id, alt) {
    return '<img loading="lazy" alt="' + esc(alt || "") + '" src="https://i.ytimg.com/vi/' + id +
      '/maxresdefault.jpg" onerror="this.onerror=null;this.src=\'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg\'">';
  }
  function lite(id, title) {
    return '<div class="lite" data-yt="' + esc(id) + '" data-title="' + esc(title) + '">' + thumb(id, "") +
      '<button class="lite-btn" type="button" aria-label="Erreproduzitu: ' + esc(title) + '"><span class="lite-play">' + icon("play") + "</span></button></div>";
  }
  function resetLite(root) {
    $$(".lite", root).forEach(function (el) {
      if (el.querySelector("iframe")) {
        el.innerHTML = thumb(el.dataset.yt, "") +
          '<button class="lite-btn" type="button" aria-label="Erreproduzitu: ' + esc(el.dataset.title) + '"><span class="lite-play">' + icon("play") + "</span></button>";
      }
    });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".lite-btn");
    if (!b) { return; }
    var box = b.closest(".lite");
    box.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(box.dataset.yt) +
      '?autoplay=1&rel=0&modestbranding=1&playsinline=1" title="' + esc(box.dataset.title) +
      '" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
  });

  /* ==========================================================================
     ERRENDATU
     ========================================================================== */
  var P = C.person;
  document.title = C.site.title;

  // nabigazioa
  $("#pills").innerHTML = C.nav.map(function (n) { return '<a href="#' + n.target + '" data-t="' + n.target + '">' + esc(n.label) + "</a>"; }).join("");
  $("#cvTop").setAttribute("href", P.cv);

  // hero
  $("#heroKicker").textContent = C.hero.kicker;
  $("#heroTitle").innerHTML = '<span class="cap">' + esc(C.hero.title.charAt(0)) + "</span>" + esc(C.hero.title.slice(1));
  $("#heroTitle").setAttribute("aria-label", C.hero.title);
  $("#heroName").textContent = P.name;
  $("#heroRole").textContent = P.role;
  $("#heroScript").textContent = P.script;
  $("#heroScroll").textContent = C.hero.scroll;
  $("#heroCta").innerHTML =
    '<a class="btn btn-wine" href="#lanak">' + esc(C.hero.cta1) + icon("arrow") + "</a>" +
    '<a class="btn btn-ghost" href="' + esc(P.cv) + '" download>' + icon("download") + esc(C.hero.cta2) + "</a>";
  $$("img[data-src]", $(".hero-film")).forEach(function (i) { i.src = i.dataset.src; });

  // niri buruz
  words($("#aboutTitle"), C.about.title);
  $("#aboutParas").innerHTML = C.about.paragraphs.map(function (t) { return "<p>" + esc(t) + "</p>"; }).join("");
  $("#aboutFacts").innerHTML = C.about.facts.map(function (f, i) {
    return '<li data-reveal style="--d:' + i + '"><span class="fi">' + icon(f.icon) + "</span><span><b>" + esc(f.label) + "</b>" + esc(f.value) + "</span></li>";
  }).join("");
  $("#idTitle").textContent = C.about.identity.title;
  $("#idText").textContent = C.about.identity.text;
  $("#tvScreen").innerHTML = lite(C.about.identity.youtube, C.about.identity.title);
  var idl = $("#idLink"); idl.href = "https://youtu.be/" + C.about.identity.youtube; idl.innerHTML = "Ikusi YouTuben " + icon("external");

  // zinta
  (function () {
    var unit = "";
    for (var i = 0; i < 2; i++) { unit += '<span>NIRI BURUZ<svg aria-hidden="true"><use href="#d-sparkle"/></svg>IZADI OROBENGOA<svg aria-hidden="true"><use href="#d-sparkle"/></svg></span>'; }
    var html = ""; for (var k = 0; k < 6; k++) { html += '<div class="unit" style="display:flex;gap:.5em">' + unit + "</div>"; }
    $("#ribbon1").innerHTML = html;
  })();

  // indarguneak
  words($("#strTitle"), C.strengths.title);
  $("#strGrid").innerHTML = C.strengths.items.map(function (s, i) {
    return '<article class="str-card" data-reveal style="--d:' + i + '"><span class="num">' + pad(i + 1) + "</span><h3>" + esc(s.title) + "</h3><p>" + esc(s.text) + "</p></article>";
  }).join("");

  // lanak
  words($("#worksTitle"), C.works.title);
  $("#worksLead").textContent = C.works.lead;
  $("#worksRow").innerHTML = C.projects.map(function (p, i) {
    var fig = p.cover.youtube ? thumb(p.cover.youtube, "") : '<img loading="lazy" src="' + esc(p.cover.image) + '" alt="' + esc(p.cover.alt || "") + '">';
    return '<a class="work-card" href="#/lana/' + esc(p.slug) + '" data-slug="' + esc(p.slug) + '" data-reveal style="--d:' + i + '">' +
      "<figure>" + fig + '<span class="chip">' + esc(p.type) + "</span></figure>" +
      '<div class="wc-body"><h3>' + esc(p.title) + "</h3><p>" + esc(p.short) + '</p><span class="wc-more">Ireki lana' + icon("arrow") + "</span></div></a>";
  }).join("");

  // vlogak
  words($("#vlTitle"), C.vlogs.title);
  $("#vlLead").textContent = C.vlogs.lead;
  var vItems = C.vlogs.items;
  $("#vlTrack").innerHTML = vItems.map(function (v, i) {
    return '<article class="vl-slide" data-i="' + i + '" role="group" aria-roledescription="diapositiba" aria-label="' + (i + 1) + " / " + vItems.length + '">' +
      '<div class="vl-cam-cell"><div class="cam"><svg viewBox="0 0 560 380" aria-hidden="true"><use href="#d-camera"/></svg><div class="cam-screen">' + lite(v.youtube, v.title) + "</div></div></div>" +
      '<div class="vl-text"><div class="vl-count">' + pad(i + 1) + " / " + pad(vItems.length) + "</div><h3>" + esc(v.title) + '</h3><p class="vl-meta">' + esc(v.meta) + "</p><p>" + esc(v.text) +
      '</p><a class="link-under" href="https://youtu.be/' + esc(v.youtube) + '" target="_blank" rel="noopener noreferrer">Ikusi YouTuben' + icon("external") + "</a></div></article>";
  }).join("");
  $("#vlDots").innerHTML = vItems.map(function (v, i) {
    return '<button type="button" role="tab" aria-label="' + esc(v.title) + '" aria-selected="' + (i === 0) + '" data-i="' + i + '"></button>';
  }).join("");

  // esperientzia
  words($("#expTitle"), C.experience.title);
  $("#timeline").innerHTML = C.experience.items.map(function (e, i) {
    return '<li data-reveal style="--d:' + i + '"><div class="when">' + esc(e.when) + "</div><h3>" + esc(e.where) + '</h3><div class="role">' + esc(e.role) + "</div><p>" + esc(e.what) + "</p></li>";
  }).join("");
  words($("#toolsTitle"), C.tools.title);
  $("#tools").innerHTML = C.tools.groups.map(function (g, i) {
    return '<div class="tool-g" data-reveal style="--d:' + i + '"><div class="t">' + esc(g.name) + '</div><div class="chips">' + g.items.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div></div>";
  }).join("");

  // zergatik ni
  words($("#whyTitle"), C.why.title);
  $("#whyList").innerHTML = C.why.items.map(function (w, i) {
    return '<div class="why-item" data-reveal style="--d:' + i + '"><span class="num">' + pad(i + 1) + "</span><h3>" + esc(w.title) + "</h3><p>" + esc(w.text) + "</p></div>";
  }).join("");

  // kontaktua
  words($("#ctTitle"), C.contact.title);
  $("#ctText").textContent = C.contact.text;
  function crow(ic, href, text) {
    var inner = '<span class="ci">' + icon(ic) + '</span><span class="t">' + esc(text) + "</span>";
    return "<li data-reveal>" + (href ? '<a href="' + esc(href) + '">' + inner + "</a>" : '<div class="row">' + inner + "</div>") + "</li>";
  }
  $("#ctList").innerHTML =
    crow("mail", "mailto:" + P.email, P.email) +
    crow("mail", "mailto:" + P.email2, P.email2) +
    crow("phone", "tel:" + P.phone.replace(/\s+/g, ""), P.phone) +
    crow("phone", "tel:" + P.phone2.replace(/\s+/g, ""), P.phone2) +
    crow("pin", "", P.city) + crow("car", "", P.car);
  $("#cvCard").setAttribute("href", P.cv);
  $("#footText").textContent = C.footer;

  // kordoi kiribilduak (telefonoa)
  $$("[data-coil]").forEach(function (p) {
    var x = +p.dataset.x, y0 = +p.dataset.y0, y1 = +p.dataset.y1, a = +p.dataset.a, turns = +p.dataset.turns;
    var steps = turns * 24, d = "";
    for (var i = 0; i <= steps; i++) {
      var f = i / steps, ph = f * turns * Math.PI * 2;
      var px = x + a * Math.cos(ph), py = y0 + (y1 - y0) * f + 7 * Math.sin(ph);
      d += (i ? "L" : "M") + px.toFixed(1) + " " + py.toFixed(1);
    }
    p.setAttribute("d", d);
  });

  /* ==========================================================================
     ERAKUSKETA (reveal), irudi alferrak, nabigazio aktiboa
     ========================================================================== */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (ents) {
    ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }) : null;
  function watch(root) {
    $$("[data-reveal], .h2", root).forEach(function (el) { if (io) { io.observe(el); } else { el.classList.add("in"); } });
  }
  watch(document);

  var lazy = "IntersectionObserver" in window ? new IntersectionObserver(function (ents) {
    ents.forEach(function (en) { if (en.isIntersecting) { var i = en.target; if (i.dataset.src) { i.src = i.dataset.src; } lazy.unobserve(i); } });
  }, { rootMargin: "500px 0px" }) : null;
  $$("img[data-src]").forEach(function (i) { if (lazy) { lazy.observe(i); } else { i.src = i.dataset.src; } });

  // nabigazio aktiboa
  var sections = ["niri-buruz", "lanak", "vlogak", "zergatik-ni", "kontaktua"].map(function (id) { return document.getElementById(id); });
  if ("IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (en.isIntersecting) {
          $$("#pills a").forEach(function (a) { a.setAttribute("aria-current", String(a.dataset.t === en.target.id)); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { if (s) { so.observe(s); } });
  }

  // menu mugikorra
  var menuBtn = $("#menuBtn"), pills = $("#pills");
  function setMenu(o) { pills.classList.toggle("open", o); menuBtn.setAttribute("aria-expanded", String(o)); menuBtn.setAttribute("aria-label", o ? "Menua itxi" : "Menua ireki"); }
  menuBtn.addEventListener("click", function () { setMenu(!pills.classList.contains("open")); });
  pills.addEventListener("click", function (e) { if (e.target.closest("a")) { setMenu(false); } });

  /* ==========================================================================
     SCROLL EFEKTUAK (parallax, zinta, diskoa)
     ========================================================================== */
  var par = $$("[data-speed]"), spin = $$("[data-spin]"), track = $("#ribbon1"), ticking = false, unitW = 0;
  function measure() { var u = $(".unit", track); unitW = u ? u.getBoundingClientRect().width + 8 : 0; }
  function frame() {
    ticking = false;
    var y = window.scrollY;
    if (!reduce) {
      par.forEach(function (el) {
        var sec = el.closest("section") || document.body;
        var top = sec.offsetTop;
        el.style.setProperty("--py", ((y - top) * (parseFloat(el.dataset.speed) || 0)).toFixed(1) + "px");
      });
      spin.forEach(function (el) { el.style.setProperty("--rot", (y * 0.06).toFixed(1) + "deg"); });
      if (unitW) { track.style.setProperty("--rx", (-((y * 0.45) % unitW)).toFixed(1) + "px"); }
    }
  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", function () { measure(); onScroll(); });
  (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () { measure(); frame(); });
  measure(); frame();

  /* ==========================================================================
     VLOGAK: kamera eta gurpil bira
     ========================================================================== */
  var stage = $("#vlStage"), slides = $$(".vl-slide"), dots = $$("#vlDots button"), cur = 0, busy = false;
  function R() { return Math.max(stage.clientWidth, stage.clientHeight) * 0.95; }
  function place(el, theta, op) {
    var r = theta * Math.PI / 180, rad = R();
    el.style.transform = "translate3d(" + (rad * (Math.cos(r) - 1)).toFixed(1) + "px," + (rad * Math.sin(r)).toFixed(1) + "px,0) rotate(" + (theta * 0.05).toFixed(2) + "deg)";
    el.style.opacity = op;
  }
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function setDots(i) { dots.forEach(function (d, k) { d.setAttribute("aria-selected", String(k === i)); }); }
  slides.forEach(function (s, i) { if (i === 0) { s.classList.add("on"); place(s, 0, 1); } else { place(s, -90, 0); } });
  function go(to, dir) {
    if (busy || to === cur) { return; }
    var out = slides[cur], inn = slides[to];
    dir = dir || (to > cur ? 1 : -1);
    busy = true; $("#vlNext").disabled = true;
    resetLite(out);
    inn.classList.add("on");
    function done() {
      out.classList.remove("on"); place(out, -90 * dir, 0); place(inn, 0, 1);
      cur = to; setDots(cur); busy = false; $("#vlNext").disabled = false;
    }
    if (reduce) { done(); return; }
    var t0 = null, dur = 1000;
    function step(ts) {
      if (t0 === null) { t0 = ts; }
      var t = Math.min(1, (ts - t0) / dur), e = ease(t);
      place(out, dir * 90 * e, 1 - Math.max(0, (t - 0.55) / 0.45));
      place(inn, -dir * 90 * (1 - e), Math.min(1, t / 0.45));
      if (t < 1) { requestAnimationFrame(step); } else { done(); }
    }
    requestAnimationFrame(step);
  }
  $("#vlNext").addEventListener("click", function () { go((cur + 1) % slides.length, 1); });
  dots.forEach(function (d) { d.addEventListener("click", function () { var i = +d.dataset.i; go(i, i > cur ? 1 : -1); }); });
  stage.addEventListener("keydown", function (e) {
    if (e.target.closest("iframe")) { return; }
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { go((cur + 1) % slides.length, 1); }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") { go((cur - 1 + slides.length) % slides.length, -1); }
  });
  var sx = 0, sy = 0;
  stage.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  stage.addEventListener("touchend", function (e) {
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) { go(dx < 0 ? (cur + 1) % slides.length : (cur - 1 + slides.length) % slides.length, dx < 0 ? 1 : -1); }
  }, { passive: true });
  window.addEventListener("resize", function () { if (!busy) { slides.forEach(function (s, i) { place(s, i === cur ? 0 : -90, i === cur ? 1 : 0); }); } });

  /* ==========================================================================
     LANEN XEHETASUNAK
     ========================================================================== */
  var detail = $("#detail"), dBody = $("#dBody"), dScroll = $("#detailScroll"), lastTrigger = null, openSlug = null, closeTimer = null;
  var main = $("#main"), topbar = $("#topbar"), footer = $(".footer");

  function idx(slug) { for (var i = 0; i < C.projects.length; i++) { if (C.projects[i].slug === slug) { return i; } } return -1; }

  function renderDetail(p) {
    var i = idx(p.slug), prev = C.projects[(i - 1 + C.projects.length) % C.projects.length], next = C.projects[(i + 1) % C.projects.length];
    var meta = "";
    if (p.year) { meta += "<div><dt>Urtea</dt><dd>" + esc(p.year) + "</dd></div>"; }
    if (p.client) { meta += "<div><dt>Testuingurua</dt><dd>" + esc(p.client) + "</dd></div>"; }
    meta += "<div><dt>Nire rola</dt><dd>" + esc(p.role) + "</dd></div>";
    meta += '<div><dt>Tresnak</dt><dd class="d-tools">' + p.tools.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</dd></div>";
    var text = "";
    if (p.goal) { text += "<section><h2>Helburua</h2><p>" + esc(p.goal) + "</p></section>"; }
    if (p.process) { text += "<section><h2>Prozesua</h2><p>" + esc(p.process) + "</p></section>"; }
    if (p.result) { text += "<section><h2>Emaitza</h2><p>" + esc(p.result) + "</p></section>"; }
    var links = p.links && p.links.length ? '<div class="d-links">' + p.links.map(function (l, k) {
      return '<a class="btn ' + (k ? "btn-ghost" : "btn-wine") + ' btn-sm" href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' + esc(l.label) + icon("external") + "</a>";
    }).join("") + "</div>" : "";
    var videos = p.videos && p.videos.length ? '<div class="d-block" data-reveal><h2>Bideoak</h2><div class="d-videos">' + p.videos.map(function (v) {
      return '<div class="d-video">' + lite(v.youtube, v.title) + "<h3>" + esc(v.title) + "</h3><p>" + esc(v.text) + "</p></div>";
    }).join("") + "</div></div>" : "";
    var gal = "";
    if (p.gallery && p.gallery.length) {
      var tagged = p.gallery.some(function (g) { return g.tag; });
      gal = '<div class="d-block" data-reveal><h2>' + (p.gallery.length > 1 ? "Aurkezpena" : "Lana") + '</h2><div class="d-gallery' + (p.gallery.length === 1 ? " single" : "") + '">' +
        p.gallery.map(function (g) {
          return '<button type="button" data-lb="' + esc(g.src) + '" data-cap="' + esc(g.caption || g.alt) + '" aria-label="Handitu: ' + esc(g.alt) + '"><img loading="lazy" src="' + esc(g.src) + '" alt="' + esc(g.alt) + '">' +
            (g.tag ? '<span class="chip">' + esc(g.tag) + "</span>" : "") + '<span class="cap">' + esc(g.caption || "") + "</span></button>";
        }).join("") + "</div>" +
        (tagged ? '<p class="d-note">Oharra: “Mockupa” etiketa duten irudiak ez dira benetako argazkiak, aurkezpenerako sortutako mockupak baizik.</p>' : "") + "</div>";
    }
    dBody.innerHTML =
      '<header class="d-hero"><div class="lace-light" aria-hidden="true"></div><div class="wrap"><span class="chip">' + esc(p.type) + '</span><h1 id="dTitle">' + esc(p.title) + '</h1><p class="d-short">' + esc(p.short) + "</p></div></header>" +
      '<div class="d-body"><div class="wrap"><div class="d-cols"><dl class="d-meta">' + meta + '</dl><div class="d-text">' + text + links + "</div></div>" + videos + gal +
      '<div class="d-next"><button class="btn btn-ghost" type="button" data-go="' + esc(prev.slug) + '">' + icon("arrow-l") + esc(prev.title) + '</button><button class="btn btn-wine" type="button" data-go="' + esc(next.slug) + '">' + esc(next.title) + icon("arrow") + "</button></div></div></div>";
    $("#dPrev").dataset.go = prev.slug; $("#dNext").dataset.go = next.slug;
    watch(dBody);
  }

  function setInert(v) { [main, topbar, footer].forEach(function (el) { if (el) { if (v) { el.setAttribute("inert", ""); } else { el.removeAttribute("inert"); } } }); }

  function openDetail(slug, o) {
    o = o || {};
    var i = idx(slug); if (i < 0) { return; }
    var p = C.projects[i];
    clearTimeout(closeTimer);
    var already = detail.classList.contains("open");
    if (o.push && history.pushState) { history.pushState({ d: slug }, "", "#/lana/" + slug); }
    openSlug = slug;
    document.title = p.title + " · " + C.person.name;
    if (already) {
      dBody.style.transition = "opacity .25s"; dBody.style.opacity = 0;
      setTimeout(function () { resetLite(dBody); renderDetail(p); dScroll.scrollTop = 0; dBody.style.opacity = 1; }, reduce ? 0 : 230);
      return;
    }
    detail.style.setProperty("--cx", (o.x != null ? o.x : window.innerWidth / 2) + "px");
    detail.style.setProperty("--cy", (o.y != null ? o.y : window.innerHeight / 2) + "px");
    renderDetail(p); dScroll.scrollTop = 0;
    detail.hidden = false;
    void detail.offsetWidth;
    detail.classList.add("open");
    document.body.classList.add("locked");
    setInert(true);
    setTimeout(function () { dScroll.focus({ preventScroll: true }); }, reduce ? 0 : 400);
  }

  function closeDetail(o) {
    if (!detail.classList.contains("open")) { return; }
    o = o || {};
    detail.classList.remove("open");
    document.body.classList.remove("locked");
    setInert(false);
    document.title = C.site.title;
    openSlug = null;
    if (o.replaceHash && location.hash.indexOf("#/lana/") === 0) { history.replaceState(null, "", location.pathname + location.search + "#lanak"); }
    closeTimer = setTimeout(function () { resetLite(dBody); dBody.innerHTML = ""; detail.hidden = true; }, reduce ? 0 : 900);
    if (lastTrigger && document.contains(lastTrigger)) { try { lastTrigger.focus({ preventScroll: true }); } catch (e) { /* */ } }
  }

  function closeByUser() {
    if (history.state && history.state.d) { history.back(); } else { closeDetail({ replaceHash: true }); }
  }

  function route() {
    var m = /^#\/lana\/([\w-]+)/.exec(location.hash);
    if (m && idx(m[1]) >= 0) { if (openSlug !== m[1]) { openDetail(m[1], {}); } } else { closeDetail(); }
  }
  window.addEventListener("popstate", route);
  window.addEventListener("hashchange", route);

  document.addEventListener("click", function (e) {
    var card = e.target.closest(".work-card");
    if (card && !e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) {
      e.preventDefault(); lastTrigger = card;
      var r = card.getBoundingClientRect();
      openDetail(card.dataset.slug, { push: true, x: e.clientX || (r.left + r.width / 2), y: e.clientY || (r.top + r.height / 2) });
      return;
    }
    var go = e.target.closest("[data-go]");
    if (go && detail.contains(go)) { openDetail(go.dataset.go, { push: true }); return; }
    var lb = e.target.closest("[data-lb]");
    if (lb) { openLightbox(lb.dataset.lb, lb.dataset.cap, lb); }
  });
  $("#dBack").addEventListener("click", closeByUser);
  $("#dClose").addEventListener("click", closeByUser);

  // Lightbox
  var lightbox = $("#lightbox"), lbFrom = null;
  function openLightbox(src, cap, from) { lbFrom = from; $("#lbImg").src = src; $("#lbImg").alt = cap || ""; $("#lbCap").textContent = cap || ""; lightbox.hidden = false; $("#lbClose").focus(); }
  function closeLightbox() { lightbox.hidden = true; $("#lbImg").removeAttribute("src"); if (lbFrom) { lbFrom.focus({ preventScroll: true }); } }
  $("#lbClose").addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) { if (e.target === lightbox) { closeLightbox(); } });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!lightbox.hidden) { closeLightbox(); } else if (detail.classList.contains("open")) { closeByUser(); } else if (pills.classList.contains("open")) { setMenu(false); }
    }
    if (detail.classList.contains("open") && lightbox.hidden && !e.target.closest("iframe, input, textarea")) {
      if (e.key === "ArrowRight") { openDetail($("#dNext").dataset.go, { push: true }); }
      if (e.key === "ArrowLeft") { openDetail($("#dPrev").dataset.go, { push: true }); }
    }
  });

  route();
})();
