document.addEventListener("DOMContentLoaded", function () {
  const interestElements = document.querySelectorAll(".people-interests");

  interestElements.forEach(function (element) {
    const interests = element.textContent
      .split(",")
      .map(function (interest) {
        return interest.trim();
      })
      .filter(function (interest) {
        return interest.length > 0;
      });

    element.innerHTML = "";

    interests.forEach(function (interest) {
      const pill = document.createElement("span");
      pill.className = "interest-pill";
      pill.textContent = interest;
      element.appendChild(pill);
    });
  });
});
