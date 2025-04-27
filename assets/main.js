// Newsletter Popup after 5 seconds
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    var popup = document.getElementById("newsletter-popup");
    if (popup) {
      popup.style.display = "block";
    }
  }, 5000);
});

// Close Popup
function closePopup() {
  var popup = document.getElementById("newsletter-popup");
  if (popup) {
    popup.style.display = "none";
  }
}

// FAQ Accordion
document.addEventListener("DOMContentLoaded", function() {
  var acc = document.getElementsByClassName("faq-question");
  for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
});
