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
