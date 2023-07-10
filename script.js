const toggle = document.querySelectorAll(".faq__container");

toggle.forEach(function (faq) {
  faq.addEventListener("click", function () {
    faq.classList.toggle("active");
  });
});
