/* SMHomestead — small bits of interactivity. No dependencies. */
(function () {
  "use strict";

  /* Mobile nav toggle */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  /* Email signup — front-end only placeholder until a mailing list is wired up */
  var form = document.querySelector(".signup-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var msg = document.querySelector(".form-msg");
      var value = (input && input.value || "").trim();
      var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      if (!msg) return;
      if (!valid) {
        msg.textContent = "Please enter a valid email address.";
        msg.style.color = "#ffd9c9";
        return;
      }
      msg.textContent = "Thanks! You're on the list — check your inbox soon.";
      msg.style.color = "#fff";
      form.reset();
    });
  }

  /* Stamp the current year in any [data-year] element */
  var years = document.querySelectorAll("[data-year]");
  if (years.length) {
    var y = String(new Date().getFullYear());
    years.forEach(function (el) { el.textContent = y; });
  }
})();
