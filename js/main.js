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

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });


function copyToClipBoard() {
  // Get the element
  var copyText = document.getElementById("copy");

  // Copy the element's innet html to clipboard
  navigator.clipboard.writeText( copyText.innerHTML);
  
}

var myTooltipEl = document.getElementById('copy')
var tooltip = new bootstrap.Tooltip(myTooltipEl,{
  trigger:'click',
  delay: {show: 500, hide: 100}
})

myTooltipEl.addEventListener('click', function () {
  setTimeout(tooltip.hide(),500);
})


