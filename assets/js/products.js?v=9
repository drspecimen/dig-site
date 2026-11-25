// Products, from DIG Admin (admin.drspecimen.online > Products). The page already shows a built-in list,
// so nothing breaks if the admin can't be reached.
(function () {
  var API = "https://admin.drspecimen.online/api/site/products";
  var ICONS = {"sparkles": "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\" /> <path d=\"M20 3v4\" /> <path d=\"M22 5h-4\" /> <path d=\"M4 17v2\" /> <path d=\"M5 18H3\" /> </svg>", "scale": "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\" /> <path d=\"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z\" /> <path d=\"M7 21h10\" /> <path d=\"M12 3v18\" /> <path d=\"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2\" /> </svg>", "graduation-cap": "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z\" /> <path d=\"M22 10v6\" /> <path d=\"M6 12.5V16a6 3 0 0 0 12 0v-3.5\" /> </svg>", "line-chart": "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /> <path d=\"m19 9-5 5-4-4-3 3\" /> </svg>", "server": "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\" /> <rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\" /> <line x1=\"6\" x2=\"6.01\" y1=\"6\" y2=\"6\" /> <line x1=\"6\" x2=\"6.01\" y1=\"18\" y2=\"18\" /> </svg>", "shield-check": "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\" /> <path d=\"m9 12 2 2 4-4\" /> </svg>", "wallet": "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\" /> <path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\" /> </svg>", "building-2": "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\" /> <path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\" /> <path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\" /> <path d=\"M10 6h4\" /> <path d=\"M10 10h4\" /> <path d=\"M10 14h4\" /> <path d=\"M10 18h4\" /> </svg>", "bot": "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M12 8V4H8\" /> <rect width=\"16\" height=\"12\" x=\"4\" y=\"8\" rx=\"2\" /> <path d=\"M2 14h2\" /> <path d=\"M20 14h2\" /> <path d=\"M15 13v2\" /> <path d=\"M9 13v2\" /> </svg>", "globe": "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <circle cx=\"12\" cy=\"12\" r=\"10\" /> <path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\" /> <path d=\"M2 12h20\" /> </svg>", "landmark": "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <line x1=\"3\" x2=\"21\" y1=\"22\" y2=\"22\" /> <line x1=\"6\" x2=\"6\" y1=\"18\" y2=\"11\" /> <line x1=\"10\" x2=\"10\" y1=\"18\" y2=\"11\" /> <line x1=\"14\" x2=\"14\" y1=\"18\" y2=\"11\" /> <line x1=\"18\" x2=\"18\" y1=\"18\" y2=\"11\" /> <polygon points=\"12 2 20 7 4 7\" /> </svg>", "school": "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M14 22v-4a2 2 0 1 0-4 0v4\" /> <path d=\"m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10\" /> <path d=\"M18 5v17\" /> <path d=\"m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6\" /> <path d=\"M6 5v17\" /> <circle cx=\"12\" cy=\"9\" r=\"2\" /> </svg>", "chart-line": "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M3 3v16a2 2 0 0 0 2 2h16\" /> <path d=\"m19 9-5 5-4-4-3 3\" /> </svg>"};
  var ARROW = "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <path d=\"M5 12h14\" /> <path d=\"m12 5 7 7-7 7\" /> </svg>", LOCK = "<svg class=\"icon\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" > <rect width=\"18\" height=\"11\" x=\"3\" y=\"11\" rx=\"2\" ry=\"2\" /> <path d=\"M7 11V7a5 5 0 0 1 10 0v4\" /> </svg>";
  var GRAD = {Finance: "linear-gradient(135deg,#0B6B4E,#0A3B33)", Education: "linear-gradient(135deg,#1E5AA8,#0A1B33)",
              Technology: "linear-gradient(135deg,#7A4A00,#0A1B33)", "Public sector": "linear-gradient(135deg,#8F2D56,#0A1B33)"};
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function icon(name) { var s = el("span"); s.innerHTML = ICONS[name] || ICONS.sparkles; return s.firstChild; }
  function link(p) { return p.page || p.url || ""; }
  function tag(p, extra) { return el("span", "tag " + (p.live ? "live" : "soon") + (extra || ""), p.live ? (p.status === "pilot" ? "Pilot" : "Live") : p.status_label); }
  function menu(box, items) {
    box.textContent = "";
    items.forEach(function (p) {
      var href = link(p), row = el(href && p.live ? "a" : "div", href && p.live ? "" : "soon-item");
      if (href && p.live) row.href = href; else row.setAttribute("aria-disabled", "true");
      var mi = el("span", "mi"); mi.appendChild(icon(p.icon)); row.appendChild(mi);
      var t = el("span"), b = el("b", null, p.name); b.appendChild(tag(p)); t.appendChild(b); t.appendChild(el("span", "d", p.tagline)); row.appendChild(t);
      box.appendChild(row);
    });
  }
  function grid(box, items) {
    box.textContent = "";
    items.forEach(function (p) {
      var href = link(p), a = el("article", "prod in" + (p.live ? "" : " is-soon"));
      var art = el("div", "art"); art.style.background = GRAD[p.sector] || "linear-gradient(135deg,#16345C,#0A1B33)";
      if (p.slug === "etomi") { var img = el("img"); img.src = "assets/img/etomi-home.webp"; img.alt = "EtoMi home screen"; img.loading = "lazy"; art.appendChild(img); }
      else art.appendChild(icon(p.icon));
      var body = el("div", "body"); body.appendChild(tag(p, " st")); body.appendChild(el("h3", null, p.name));
      if (p.sector) body.appendChild(el("div", "sub", p.sector));
      body.appendChild(el("p", null, (p.description || p.tagline || "").slice(0, 200)));
      var foot = el("div", "foot");
      if (href && p.live) { var l = el("a", "link", "Learn more "); l.href = href; l.insertAdjacentHTML("beforeend", ARROW); foot.appendChild(l); }
      else { var c = el("span", "closed"); c.insertAdjacentHTML("beforeend", LOCK); c.appendChild(document.createTextNode("Coming soon")); foot.appendChild(c); }
      body.appendChild(foot); a.appendChild(art); a.appendChild(body); box.appendChild(a);
    });
  }
  if (!window.fetch) return;
  fetch(API).then(function (r) { return r.json(); }).then(function (j) {
    var items = (j && j.products) || [];
    if (!items.length) return;
    document.querySelectorAll("[data-products-menu]").forEach(function (b) { menu(b, items); });
    document.querySelectorAll("[data-products-grid]").forEach(function (b) { grid(b, items); });
    var latest = j.latest;
    if (latest && link(latest)) {
      document.querySelectorAll("[data-latest]").forEach(function (a) {
        a.textContent = a.getAttribute("data-latest") + latest.name; a.href = link(latest);
        if (/^https?:/.test(a.href) && a.href.indexOf(location.host) < 0) a.rel = "noopener";
      });
    }
  }).catch(function () {});
})();
