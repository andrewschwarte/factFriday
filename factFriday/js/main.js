document.addEventListener('DOMContentLoaded', function() {
    const postFactBtn = document.getElementById('post-fact-btn');
    const newFactInput = document.getElementById('new-fact-input');
    const factsList = document.getElementById('facts-list');

    postFactBtn.addEventListener('click', function() {
        let factText = newFactInput.value.trim(); // Get the fact input and trim white spaces

        if (factText !== "") {
            // Replace newlines with <br> tags to preserve formatting
            factText = factText.replace(/\n/g, '<br>');

            // Create a new fact element and use innerHTML to add formatted text
            const newFact = document.createElement('div');
            newFact.className = 'fact-item';
            newFact.innerHTML = factText; // Use innerHTML to preserve <br> tags

            // Add the new fact to the list
            factsList.appendChild(newFact);

            // Clear the input field after posting
            newFactInput.value = '';
        } else {
            alert("Please enter a fact before posting!"); // Alert user if input is empty
        }
    });
});
