// Ini Javascript
window.onload = function() {
    var userName = prompt("Siapakah Nama Anda?");
    if (userName) {
        document.getElementById("user-name").textContent = userName;
    }
};

    document.getElementById("reviewForm").onsubmit = function (event) {
        event.preventDefault();

        // Get form values
        var name = document.getElementById("name").value;
        var dob = document.getElementById("dob").value;
        var collection = document.querySelector('input[name="collection"]:checked').value;

        // Get current time in Indonesia (WIB)
        var now = new Date();
        var options = {
            timeZone: 'Asia/Jakarta',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };
        var indonesiaTime = new Intl.DateTimeFormat('en-GB', options).format(now);

        // Display the review result
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
            <h2>Review Submitted</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>
            <p><strong>Collection Feedback:</strong> ${collection === 'like-it' ? 'Like it' : 'Dislike it'}</p>
            <p><strong>Submitted at:</strong> ${indonesiaTime}</p>
        `;
    };

