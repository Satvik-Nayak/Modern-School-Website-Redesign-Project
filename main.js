const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.textContent = open ? "×" : "☰";
    menuButton.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
  });
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    }),
  );
}
document
  .querySelectorAll("[data-year]")
  .forEach((el) => (el.textContent = new Date().getFullYear()));
const form = document.querySelector("#contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector('[name="name"]')?.value.trim() || "";
    const status = document.querySelector("#formStatus");
    if (status)
      status.textContent = `Thanks${name ? ", " + name : ""}! This demo form is validated locally; no information was sent or saved.`;
    form.reset();
  });
}
const search = document.querySelector("#eventSearch"),
  category = document.querySelector("#eventCategory"),
  cards = [...document.querySelectorAll("#noticeResults article")],
  empty = document.querySelector("#emptyState");
function filter() {
  let shown = 0;
  const q = (search?.value || "").toLowerCase().trim(),
    c = category?.value || "all";
  cards.forEach((card) => {
    const ok =
      card.textContent.toLowerCase().includes(q) &&
      (c === "all" || card.dataset.category === c);
    card.hidden = !ok;
    if (ok) shown++;
  });
  if (empty) empty.hidden = shown > 0;
}
search?.addEventListener("input", filter);
category?.addEventListener("change", filter);
