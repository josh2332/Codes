
        // Get form and message elements
        const form = document.getElementById('nameForm');
        const input = document.getElementById('fullname');
        const message = document.getElementById('message');

        // Handle form submission
        form.addEventListener('submit', function(event) {
            // Prevent the default form submission (page reload)
            event.preventDefault();

            // Get the full name value
            const fullName = input.value.trim();

            // Check if input is not empty
            if (fullName) {
                // Display success message
                message.textContent = 'Hello, ' + fullName + '! Your name has been submitted.';
                message.classList.add('success');

                // Clear the input field
                input.value = '';

                // Log to console (for debugging)
                console.log('Submitted full name:', fullName);
            }
        });

        // Optional: Clear message when user starts typing
        input.addEventListener('input', function() {
            message.classList.remove('success');
            message.textContent = '';
        });
    