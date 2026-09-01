import { site } from "./site.js";

function address() {
  return `${site.emailLocal}@${site.emailDomain}`;
}

function revealEmail() {
  const panel = document.getElementById("email-panel");
  const link = panel.querySelector("a");
  const addr = address();

  link.href = `mailto:${addr}`;
  link.textContent = addr;
  panel.hidden = false;

  for (const btn of document.querySelectorAll("[data-reveal-email]")) {
    btn.setAttribute("aria-expanded", "true");
  }

  panel.scrollIntoView({ behavior: "smooth", block: "center" });
  link.focus();
}

for (const btn of document.querySelectorAll("[data-reveal-email]")) {
  btn.addEventListener("click", revealEmail);
}
