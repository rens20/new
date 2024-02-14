
function openModal(image) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = image;
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  // Toggle Navbar for small screens
  function toggleNav() {
    var navLinks = document.getElementById("nav-links");
    var toggleIcon = document.querySelector('.toggle');
  
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
      toggleIcon.classList.remove('open');
    } else {
      navLinks.style.display = "block";
      toggleIcon.classList.add('open');
    }
  }
  
  // Carousel
// grab all panel classes
const panels = document.querySelectorAll(".panel");

// loop through the node list
panels.forEach((panel) => {
  // listen for a click
  panel.addEventListener("click", () => {
    removeActive();
    // if clicked -> add a class of active (so also flex = 5)
    panel.classList.add("active");
  });
});

// function to remove active class from elements
function removeActive() {
  // loop through panels
  panels.forEach((panel) => {
    // remove active classes from panel objects
    panel.classList.remove("active");
  });
}