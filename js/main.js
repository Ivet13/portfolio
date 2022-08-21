// Show an element
var show = function (elem) {
  elem.classList.remove("d-none");
  elem.classList.add("d-block");
};

// Hide an element
var hide = function (elem) {
  elem.classList.remove("d-block");
  elem.classList.add("d-none");
};

// Toggle element visibility
var toggle = function (elem) {
  // hide all elements
  const mainChildren = document.getElementById("main").children;  
  for (child of mainChildren) {
    child.classList.add("d-none");
  }

  // If the element is visible, hide it
  if (window.getComputedStyle(elem).display === "block") {
    hide(elem);
    return;
  }

  // Otherwise, show it
  show(elem);
};

// Listen for click events
document.addEventListener(
  "click",
  function (event) {
    // Make sure clicked element is our toggle
    if (!event.target.classList.contains("toggle")) return;

    // Prevent default link behavior
    event.preventDefault();

    // Get the content
    var content = document.querySelector(event.target.hash);
    if (!content) return;

    // Toggle the content
    toggle(content);
  },
  false
);
