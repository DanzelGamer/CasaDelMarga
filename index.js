
let header = document.getElementById("header");
let button = document.getElementById("button1");
let clicked = false;

// Change the headline when the button is clicked
if (header && button) {
    button.onclick = function() {
        if (clicked == false) {
            clicked = true;

            header.textContent = "Made By Your One And Only DanzelGamer, Youtube: @DanzelGamer";
            header.style.color = "pink";
            button.textContent = "Back To Welcome";
        }
        else {
            clicked = false;

            header.textContent = "Your perfect escape starts here.";
            header.style.color = "white";
            button.textContent = "Click Me";
        }
    };
}

// Show the date and time on the Home page
let home = document.querySelector(".home-text");

if (home) {
    let clock = document.createElement("p");
    home.appendChild(clock);

    function updateClock() {
        let now = new Date();

        clock.textContent = "Today Is " + now.toLocaleDateString() +
            " | Time: " + now.toLocaleTimeString();

        clock.style.color = "#d8b85f";
    }

    updateClock();
    setInterval(updateClock, 1000);
}

// Back to Top button for all pages
let topButton = document.createElement("button");
topButton.textContent = "↑ Back to Top";
document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.padding = "10px 15px";
topButton.style.backgroundColor = "#d8b85f";
topButton.style.color = "#071419";
topButton.style.border = "none";
topButton.style.borderRadius = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.fontWeight = "bold";

// Show the button when scrolling down
window.onscroll = function() {
    if (window.scrollY > 200) {
        topButton.style.display = "block";
    }
    else {
        topButton.style.display = "none";
    }
};

// Go back to the top
topButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// Show the feature boxes on the Home page
let features = document.querySelectorAll(".features div");

for (let i = 0; i < features.length; i++) {
    features[i].style.opacity = "1";
    features[i].style.transition = "1s";
}

// Interactive Photo Gallery
let photos = document.querySelectorAll(".gallery img");

if (photos.length > 0) {
    // Create the photo viewer
    let photoViewer = document.createElement("div");
    document.body.appendChild(photoViewer);

    photoViewer.style.display = "none";
    photoViewer.style.position = "fixed";
    photoViewer.style.top = "0";
    photoViewer.style.left = "0";
    photoViewer.style.width = "100%";
    photoViewer.style.height = "100%";
    photoViewer.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    photoViewer.style.zIndex = "1000";
    photoViewer.style.textAlign = "center";
    photoViewer.style.paddingTop = "40px";
    photoViewer.style.boxSizing = "border-box";

    // Create the large photo
    let largePhoto = document.createElement("img");
    largePhoto.style.maxWidth = "80%";
    largePhoto.style.maxHeight = "70%";
    largePhoto.style.objectFit = "contain";
    photoViewer.appendChild(largePhoto);

    // Create the buttons
    let previousButton = document.createElement("button");
    previousButton.textContent = "Previous";
    photoViewer.appendChild(previousButton);

    let nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    photoViewer.appendChild(nextButton);

    let closeButton = document.createElement("button");
    closeButton.textContent = "Close X";
    photoViewer.appendChild(closeButton);

    // Style the buttons
    let galleryButtons = [previousButton, nextButton, closeButton];

    for (let i = 0; i < galleryButtons.length; i++) {
        galleryButtons[i].style.padding = "10px 15px";
        galleryButtons[i].style.margin = "15px 5px";
        galleryButtons[i].style.backgroundColor = "#d8b85f";
        galleryButtons[i].style.color = "#071419";
        galleryButtons[i].style.border = "none";
        galleryButtons[i].style.borderRadius = "8px";
        galleryButtons[i].style.cursor = "pointer";
    }

    let currentPhoto = 0;

    // Open a photo when clicked
    for (let i = 0; i < photos.length; i++) {
        photos[i].style.cursor = "pointer";

        photos[i].onclick = function() {
            currentPhoto = i;
            showPhoto();
        };
    }

    // Display the selected photo
    function showPhoto() {
        largePhoto.src = photos[currentPhoto].src;
        largePhoto.alt = photos[currentPhoto].alt;
        photoViewer.style.display = "block";
    }

    // Show the previous photo
    previousButton.onclick = function() {
        currentPhoto--;

        if (currentPhoto < 0) {
            currentPhoto = photos.length - 1;
        }

        showPhoto();
    };

    // Show the next photo
    nextButton.onclick = function() {
        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        showPhoto();
    };

    // Close the photo viewer
    closeButton.onclick = function() {
        photoViewer.style.display = "none";
    };
}
