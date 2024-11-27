// script.js

// Function to toggle visibility of content
function toggleContent(event) {
    const content = event.target.nextElementSibling;  // Get the corresponding content for clicked header

    // Toggle the display property of the content
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";  // Show the content
    } else {
        content.style.display = "none";  // Hide the content
    }
}

// Get all toggle headers and attach event listeners
const toggleHeaders = document.querySelectorAll('.toggle-header');
toggleHeaders.forEach(header => {
    header.addEventListener('click', toggleContent);
});
