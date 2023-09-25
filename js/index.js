const emailForm = document.getElementById('emailForm');
        const emailInput = document.getElementById('email');
        const errorLabel = document.getElementById('errorLabel');
        const successDiv = document.querySelector('.success');
        const verifiedEmailSpan = document.getElementById('verifiedEmail');
        const offBox = document.querySelector('.central_box')
        const successText = document.querySelector('.success_p')

        emailForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar el envío predeterminado del formulario

            const email = emailInput.value;
            if (!isValidEmail(email)) {
                errorLabel.style.display = 'block';
                emailInput.classList.add('error-input');
                emailInput.style.borderColor ='red';
                emailInput.style.background = '#f000007e';
            } else {
                errorLabel.style.display = 'none';
                emailInput.classList.remove('error-input');
                offBox.style.display = 'none';


                // Mostrar el div de éxito y configurar el correo verificado
                successText.append("A confirmation email has been sent to: " + emailInput.value +  ". Please open it and click the button inside to confirm your subscription");
                successDiv.style.display = 'block';
                verifiedEmailSpan.textContent = email;
            }
        });

        // Función para verificar si el correo electrónico es válido
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }


