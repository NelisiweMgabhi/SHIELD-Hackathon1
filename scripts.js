document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input[type='text'], input[type='email'], textarea");

    inputs.forEach(input => {
        input.addEventListener("focus", function() {
            this.style.backgroundColor = "#e0f7fa"; // Change to desired color
        });

        input.addEventListener("blur", function() {
            this.style.backgroundColor = ""; // Reset to original background color
        });
    });
});

window.onscroll = function() {
    updateScrollIndicator();
};

function updateScrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.querySelector('.scroll-indicator').style.width = scrolled + '%';
}

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display the submit message
    document.getElementById('submitMessage').classList.remove('hidden');
    
    // Clear the form
    this.reset();
});
