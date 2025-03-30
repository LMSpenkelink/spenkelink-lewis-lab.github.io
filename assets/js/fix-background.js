document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".carousel-item.background-left").forEach(function (el) {
      el.style.backgroundPosition = "left center";
    });
  });