const APP_STORE_URL = "https://apps.apple.com/jp/search?term=SellLight";
// TODO: 正式なSellLightのApp Store URLが確定したら、APP_STORE_URLを差し替える。

document.querySelectorAll(".js-app-store-link").forEach((link) => {
  link.setAttribute("href", APP_STORE_URL);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.parentElement?.querySelector(".faq-answer");
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));

    if (answer) {
      answer.hidden = isOpen;
    }
  });
});

const floatingCta = document.querySelector(".floating-cta");

if (floatingCta) {
  const updateFloatingCta = () => {
    const shouldShow = window.scrollY > 420;
    floatingCta.hidden = !shouldShow;
  };

  updateFloatingCta();
  window.addEventListener("scroll", updateFloatingCta, { passive: true });
}
