
// var acc_item = document.getElementsByClassName("item-faq-wrapper");
// for (let s = 0; s < acc_item.length; s++) {
//   acc_item[s].addEventListener("mouseleave", function() {
//     this.querySelector('.accordion-faqs').classList.remove("accordion-active");
//     var panel = this.querySelector('.accordion-faqs').nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null
//     }
//   });
// }



// var acc = document.getElementsByClassName("accordion-faqs");

// function openAccordion() {
//   var panel = this.nextElementSibling;
//   this.classList.add("accordion-active");
//   panel.style.maxHeight = panel.scrollHeight + "px";
// }

// function closeAccordion() {
//   var panel = this.nextElementSibling;
//   this.classList.remove("accordion-active");
//   panel.style.maxHeight = null;
// }

// function toggleAccordion() {
//   var isActive = this.classList.contains("accordion-active");

//   // Close all accordions
//   for (let i = 0; i < acc.length; i++) {
//     var otherPanel = acc[i].nextElementSibling;
//     acc[i].classList.remove("accordion-active");
//     otherPanel.style.maxHeight = null;
//   }

//   // Open the clicked accordion if it was not active
//   if (!isActive) {
//     openAccordion.call(this);
//   }
// }

// for (let i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("mouseenter", openAccordion);

//   // Remove the click event listener if present to avoid double click issues
//   acc[i].removeEventListener("click", toggleAccordion);

//   // Add click event listener for mobile devices
//   acc[i].addEventListener("click", toggleAccordion);

//   // Prevent the default behavior of the click event on mobile devices
//   acc[i].addEventListener("touchstart", function (e) {
//     e.preventDefault();
//     toggleAccordion.call(this);
//   });
// }


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
