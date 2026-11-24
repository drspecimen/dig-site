// Drspecimen IntelliSense Group — site behaviour
(function () {
  const header = document.querySelector(".site-header");
  const burger = document.querySelector(".burger");
  if (burger) burger.addEventListener("click", () => {
    const open = header.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // dropdown menus
  document.querySelectorAll(".nav li.has-menu > button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const li = btn.parentElement;
      const was = li.classList.contains("open");
      document.querySelectorAll(".nav li.open").forEach((x) => { x.classList.remove("open"); x.querySelector("button").setAttribute("aria-expanded", "false"); });
      if (!was) { li.classList.add("open"); btn.setAttribute("aria-expanded", "true"); }
    });
  });
  document.addEventListener("click", () => document.querySelectorAll(".nav li.open").forEach((x) => x.classList.remove("open")));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") document.querySelectorAll(".nav li.open").forEach((x) => x.classList.remove("open")); });

  // year
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  // reveal on scroll
  const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" }) : null;
  document.querySelectorAll(".rv").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

  // anchor bar highlight
  const links = [...document.querySelectorAll(".anchors a")];
  if (links.length && io) {
    const spy = new IntersectionObserver((es) => es.forEach((en) => {
      if (en.isIntersecting) links.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + en.target.id));
    }), { rootMargin: "-40% 0px -55% 0px" });
    links.forEach((a) => { const t = document.querySelector(a.getAttribute("href")); if (t) spy.observe(t); });
  }

  // contact form: composes an email to DIG (no data stored on this site)
  const form = document.getElementById("contact-form");
  if (form) {
    const params = new URLSearchParams(location.search);
    const topic = params.get("topic");
    if (topic && form.topic.querySelector(`option[value="${topic}"]`)) form.topic.value = topic;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const f = form.elements;
      const subject = `[${f.topic.options[f.topic.selectedIndex].text}] Enquiry from ${f.name.value}${f.org.value ? " (" + f.org.value + ")" : ""}`;
      const body = `${f.message.value}\n\n— ${f.name.value}\n${f.org.value}\n${f.email.value}${f.phone.value ? "\n" + f.phone.value : ""}`;
      location.href = `mailto:research@drspecimen.online?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      document.getElementById("form-msg").hidden = false;
    });
  }
})();

// Anonymous visit count, shown in DIG Admin (admin.drspecimen.online). No cookies and no personal data:
// only a random code this browser makes for itself, and where the visit came from (e.g. ?from=bulletin).
(function () {
  var ENDPOINT = "https://admin.drspecimen.online/api/collect";
  var device = "";
  try {
    device = localStorage.getItem("dig:device") || "";
    if (!/^[a-f0-9]{32}$/.test(device)) {
      var b = new Uint8Array(16); crypto.getRandomValues(b);
      device = Array.from(b, function (x) { return x.toString(16).padStart(2, "0"); }).join("");
      localStorage.setItem("dig:device", device);
    }
  } catch (e) { return; }
  function source() {
    var from = (new URLSearchParams(location.search).get("from") || "").toLowerCase().replace(/[^a-z0-9_-]/g, "").slice(0, 20);
    if (from) return from;
    if (!document.referrer) return "direct";
    try {
      var h = new URL(document.referrer).hostname;
      if (h === location.hostname || /(^|\.)drspecimen\.online$/.test(h)) return "direct";
      if (/google\.|bing\.|yahoo\.|duckduckgo\./.test(h)) return "search";
      if (/whatsapp|wa\.me/.test(h)) return "whatsapp";
      if (/facebook|instagram|t\.co$|twitter|x\.com|linkedin|lnkd|tiktok/.test(h)) return "social";
      return "other";
    } catch (e) { return "other"; }
  }
  function send(event) {
    var body = JSON.stringify({ product: "dig-website", event: event, device: device, src: source() });
    try { if (navigator.sendBeacon && navigator.sendBeacon(ENDPOINT, new Blob([body], { type: "text/plain" }))) return; } catch (e) {}
    try { fetch(ENDPOINT, { method: "POST", body: body, mode: "no-cors", keepalive: true }); } catch (e) {}
  }
  window.DIGTrack = send;
  send("visit");
  var form = document.getElementById("contact-form");
  if (form) form.addEventListener("submit", function () { if (form.checkValidity()) send("contact"); });
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href*='etomi.drspecimen.online']");
    if (a) send("etomi_click");
  });
})();
