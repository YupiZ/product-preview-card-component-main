
const img = document.querySelector("img");

// Function to update the image source based on screen width
function updateImageBasedOnScreenWidth() {
    if (window.innerWidth >= 1440) {
        img.src = "images/image-product-desktop.jpg";
    } else {
        img.src = "images/image-product-mobile.jpg";
    }
}

// Initial update based on screen width
updateImageBasedOnScreenWidth();

// Add a resize event listener to continuously monitor screen width
window.addEventListener("resize", updateImageBasedOnScreenWidth);
