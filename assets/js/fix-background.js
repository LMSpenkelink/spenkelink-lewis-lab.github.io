function createInterestPills() {
  const interestElements = document.querySelectorAll(
    ".people-widget .people-interests"
  );

  interestElements.forEach(function (element) {
    // Don't process the same element twice
    if (element.dataset.pillsApplied === "true") {
      return;
    }

    const interests = element.textContent
      .split(",")
      .map(function (interest) {
        return interest.trim();
      })
      .filter(function (interest) {
        return interest.length > 0;
      });

    // Only continue if we found interests
    if (interests.length === 0) {
      return;
    }

    element.innerHTML = "";

    interests.forEach(function (interest) {
      const pill = document.createElement("span");
      pill.className = "interest-pill";
      pill.textContent = interest;
      element.appendChild(pill);
    });

    element.dataset.pillsApplied = "true";
  });
}

// Run once the initial HTML is ready
document.addEventListener("DOMContentLoaded", createInterestPills);

// Run again after everything has loaded
window.addEventListener("load", createInterestPills);
