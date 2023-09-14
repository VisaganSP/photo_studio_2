
		   var header = document.getElementById("mydiv");
			var btns = header.getElementsByClassName("option");
			for (var i = 0; i < btns.length; i++) {
				btns[i].addEventListener("click", function () {
					var current = document.getElementsByClassName("active-btn");
					current[0].className = current[0].className.replace(" active-btn", "");
					this.className += " active-btn";
				});
                debugger
        }
		// const hamburger = document.querySelector(".navbar-nav");
		// document.querySelectorAll(".nav-link").forEach(n => 
		// n.addEventListener("click", () => {
		// 	hamburger.classList.remove("active");
		// }))
	
		$(document).ready(function () {
		  // When a navigation option is clicked
		  $(".nav-link").click(function () {
			// Check if the navbar toggle button is visible (i.e., the menu is open)
			if ($(".navbar-toggler").is(":visible")) {
			  // Close the menu by triggering a click on the navbar toggle button
			  $(".navbar-toggler").click();
			}
		  });
		});
	
	   // Function to load images from JSON file and filter them
  function loadImages(filter) {
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ""; // Clear existing images

    // Load JSON data
    fetch("images.json")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((image) => {
          // Check if the image matches the filter or if the filter is "all"
          if (filter === "all" || image.category === filter) {
            // Create an image element
            const img = document.createElement("img");
            img.className = "mm-columns__img";
            img.src = image.src;

            // Create a div element for the image container
            const div = document.createElement("div");
            div.className = "mm-columns__item";
            div.appendChild(img);

            // Append the image container to the image container
            imageContainer.appendChild(div);

            img.addEventListener("click", () => {
                const modal = document.getElementById("image-modal");
                const modalImage = document.getElementById("full-size-image");
                modalImage.src = img.src;
                modal.style.display = "block";
              });
          }
        });
      });
  }

  // Initial load of all images
  loadImages("all");

  // Filter images when a filter button is clicked
  const filterButtons = document.querySelectorAll(".filter-button");
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter");
      loadImages(filter);
    });
  });
  const modal = document.getElementById("image-modal");
  modal.addEventListener("click", (event) => {
    if (event.target === modal || event.target.className === "close") {
      modal.style.display = "none";
    }
  });


