// scripts.js
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });
  // JavaScript to change the highlighted word every 2 seconds
  const highlightedWord = document.querySelector(".highlighted-word");
  const words = ["Securely", "Effortlessly", "At Scale"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % words.length;
    highlightedWord.textContent = words[index];
  }, 2000);
  // JavaScript for additional animations or interactions (if needed)
  document.addEventListener("DOMContentLoaded", () => {
    const founderCards = document.querySelectorAll(".founder-card");

    founderCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transition = "transform 0.3s, box-shadow 0.3s";
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
        card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      });
    });
  });
  // Add smooth scrolling behavior when clicking anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Check if the current URL is the homepage
  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html"
  ) {
    // Check if the popup has already been shown
    if (!sessionStorage.getItem("popupShown")) {
      // Show the popup on page load
      var popup = document.getElementById("get-in-touch-popup");
      popup.style.display = "flex"; // Display the popup as a flexbox

      // Mark the popup as shown in sessionStorage
      sessionStorage.setItem("popupShown", "true");

      // Close the popup when the close button is clicked
      var closeButton = document.getElementById("close-popup");
      closeButton.addEventListener("click", function () {
        popup.style.display = "none";
      });

      // Optional: Close popup when clicking outside of it
      window.addEventListener("click", function (event) {
        if (event.target === popup) {
          popup.style.display = "none";
        }
      });
    }
  }

  // Redirect to success.html when the button is clicked
  var getInTouchButton = document.getElementById("get-in-touch-button");
  getInTouchButton.addEventListener("click", function () {
    window.location.href = "success.html"; // Redirect to success.html
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const founder = document.getElementById("founder");
  const investor = document.getElementById("investor");

  // Animate founder section
  setTimeout(() => {
    founder.classList.add("jump");
  }, 300);

  // Animate investor section
  setTimeout(() => {
    investor.classList.add("jump");
  }, 600);
});
document.addEventListener("DOMContentLoaded", function () {
  const serviceItems = document.querySelectorAll(
    ".contact-center-service-item"
  );

  serviceItems.forEach((item, index) => {
    // Use setTimeout to stagger the animations
    setTimeout(() => {
      item.style.opacity = "1";
      item.style.animation = "fadeInRight 0.5s ease forwards";
    }, index * 200); // Stagger each item by 200ms
  });
});

window.addEventListener("scroll", function () {
  const elements = document.querySelectorAll(".service-detail");
  const viewportHeight = window.innerHeight;

  elements.forEach((element) => {
    const position = element.getBoundingClientRect().top;

    if (position < viewportHeight) {
      element.classList.add("visible");
    }
  });
});

// CSS for the visible class
const style = document.createElement("style");
style.textContent = `
.service-detail {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.service-detail.visible {
  opacity: 1;
}
`;
document.head.append(style);
// script.js
$(document).ready(function () {
  // Function to handle scroll animations
  function animateOnScroll() {
    $(".member").each(function () {
      var elementOffset = $(this).offset().top;
      var windowScroll = $(window).scrollTop() + $(window).height();
      if (windowScroll > elementOffset + 50) {
        $(this).addClass("show"); // Add 'show' class to trigger CSS animation
      }
    });
  }

  // Execute on scroll
  $(window).on("scroll", function () {
    animateOnScroll();
  });

  // Execute once on page load
  animateOnScroll();
});
// script.js

$(document).ready(function () {
  // Handle form submission
  $(".contact-form").on("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      company: $("#company").val(),
      message: $("#message").val(),
    };

    // Log data to the console (You can replace this with an AJAX call to send data to your server)
    console.log("Form Data:", formData);
    alert("Message sent successfully!"); // Alert for demo purposes

    // Optionally reset the form
    $(this).trigger("reset");
  });
});

document
  .querySelector('a[href="#livechat"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    alert(
      "Live chat is not available right now. Please contact us through the form."
    );
  });
