document.addEventListener("DOMContentLoaded", function () {
  let images = document.querySelectorAll("img[data-expandable]");
  images.forEach((img) => {
    img.addEventListener("click", function (event) {
      let modal = document.createElement("div");
      modal.style.top = 0;
      modal.style.left = 0;
      modal.style.background = `#0000007F url(${img.getAttribute("src")}) no-repeat center`;
      modal.style.backgroundSize = "contain";
      modal.style.position = "fixed";
      modal.style.zIndex = 10;
      modal.style.cursor = "zoom-out";
      modal.style.width = "100%";
      modal.style.height = "100%";
      let escapeKeyListener;
      const removeModal = () => {
        modal.remove();
        document.body.style.overflow = null;
        window.removeEventListener("keydown", escapeKeyListener);
      };
      escapeKeyListener = (event) => {
        if (event.key == "Escape" || event.keyCode == "Escape") {
          removeModal();
        }
      };
      modal.addEventListener("click", (event) => {
        removeModal();
      });
      window.addEventListener("keydown", escapeKeyListener);
      document.body.appendChild(modal);
      document.body.style.overflow = "hidden";
    });
  });
});
