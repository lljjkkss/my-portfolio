document.addEventListener('DOMContentLoaded', function() {

    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const sendButton = document.getElementById('send-message-btn');

    if (contactForm) {
        
        function showError(input, message) {
            const errorSpan = input.nextElementSibling;
            errorSpan.textContent = message;
            errorSpan.style.display = 'block';
            input.classList.add('invalid');
        }

        function clearError(input) {
            const errorSpan = input.nextElementSibling;
            errorSpan.textContent = '';
            errorSpan.style.display = 'none';
            input.classList.remove('invalid');
        }

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            let isValid = true;
            formStatus.textContent = '';

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const inputs = [name, email, message];

            inputs.forEach(input => {
                clearError(input);
                if (!input.checkValidity()) {
                    isValid = false;
                    let errorMessage = 'This field is required.';
                    if (input.type === 'email' && input.value) {
                        errorMessage = 'Please enter a valid email address.';
                    }
                    showError(input, errorMessage);
                }
            });

            if (!isValid) {
                formStatus.textContent = 'Please review the fields in red.';
                formStatus.style.color = 'red';
                return;
            }

            const originalButtonText = sendButton.textContent;
            sendButton.textContent = 'Sending...';
            sendButton.disabled = true;
            formStatus.textContent = 'Sending message...';
            formStatus.style.color = 'var(--secondary)';

            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            fetch("https://formspree.io/f/mwpapeaa", {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    formStatus.textContent = 'Message sent successfully! Thank you.';
                    formStatus.style.color = 'green';
                    contactForm.reset();
                } else {
                    return response.json().then(data => {
                        let errorMsg = 'An error occurred. Please try again.';
                        if (data && data.errors) {
                            errorMsg = data.errors.map(err => err.message).join(', ');
                        }
                        throw new Error(errorMsg);
                    });
                }
            })
            .catch(error => {
                formStatus.textContent = `Error: ${error.message}`;
                formStatus.style.color = 'red';
            })
            .finally(() => {
                sendButton.textContent = originalButtonText;
                sendButton.disabled = false;
            });
        });

        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', () => {
                if (input.classList.contains('invalid')) {
                    clearError(input);
                }
            });
        });
    }
});