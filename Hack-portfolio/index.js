
        // Matrix Rain Effect
        const canvas = document.getElementById('matrix-bg');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        const matrixArray = matrix.split("");

        const fontSize = 10;
        const columns = canvas.width / fontSize;

        const drops = [];
        for(let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        function drawMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff41';
            ctx.font = fontSize + 'px monospace';

            for(let i = 0; i < drops.length; i++) {
                const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        setInterval(drawMatrix, 35);

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form Submission with Web3Forms
        const form = document.getElementById('contactForm');
        const result = document.getElementById('result');
        const submitBtn = document.getElementById('submitBtn');

        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Disable submit button and show loading state
            submitBtn.disabled = true;
            submitBtn.textContent = 'SENDING...';
            result.innerHTML = '';
            
            const formData = new FormData(form);
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: json
                });
                
                const data = await response.json();
                
                if (response.status === 200) {
                    result.innerHTML = '<p style="color: #00ff41; margin-top: 15px;">✓ Message sent successfully! I will get back to you soon.</p>';
                    form.reset();
                } else {
                    console.error('Error:', data);
                    result.innerHTML = '<p style="color: #ff0000; margin-top: 15px;">✗ Something went wrong. Please try again.</p>';
                }
            } catch (error) {
                console.error('Error:', error);
                result.innerHTML = '<p style="color: #ff0000; margin-top: 15px;">✗ Network error. Please check your connection.</p>';
            } finally {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.textContent = 'SEND MESSAGE';
            }
        });

        // Typing Effect
        const typingText = document.querySelector('.typing-text');
        const text = typingText.textContent.replace('_', '');
        typingText.textContent = '';
        
        let index = 0;
        function typeWriter() {
            if (index < text.length) {
                typingText.innerHTML = text.slice(0, index + 1) + '<span class="typing-cursor">_</span>';
                index++;
                setTimeout(typeWriter, 100);
            }
        }
        
        setTimeout(typeWriter, 500);

        // Resize Canvas
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        // Add glitch effect on hover
        document.querySelectorAll('.project-card, .skill-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.animation = 'glitch 0.3s';
            });
            card.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });