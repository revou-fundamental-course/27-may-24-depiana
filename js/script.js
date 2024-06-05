// Ini Javascript
window.onload = function() {
    var userName = prompt("Siapakah Nama Anda?");
    if (userName) {
        document.getElementById("user-name").textContent = userName;
    }
};

document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const review = document.getElementById('review').value;

    // Create a new div to display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Review Submitted</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Review:</strong> ${review}</p>
    `;
});


