document.addEventListener("DOMContentLoaded", () => {
    const canvases = document.querySelectorAll("canvas"); // Select all canvas elements

    canvases.forEach((canvas) => {
        const ctx = canvas.getContext("2d");

        // Set canvas dimensions to match the window
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off the edges
                if (this.x >= canvas.width || this.x <= 0) this.speedX *= -1;
                if (this.y >= canvas.height || this.y <= 0) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function init() {
            for (let i = 0; i < 50; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        }

        init();
        animate();

        // Update canvas size on window resize
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            particles.length = 0;
            init();
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typing-text");
    const textArray = ["Fresher "," Web Developer", "Responsive Web Designer", "Enthusiastic About New Technologies"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentText = textArray[textIndex];
        if (isDeleting) {
            textElement.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % textArray.length;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
});

document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-bar");
    const skillsSection = document.getElementById("skills");
    const skillsNav = document.querySelector("nav ul li[data-target='skills']"); // Select the Skills nav item

    function animateSkills() {
        skillBars.forEach(bar => {
            let percentage = bar.getAttribute("data-percentage");
            bar.style.width = "0%"; // Reset to 0%
            
            setTimeout(() => {
                bar.style.transition = "width 2s ease-in-out";
                bar.style.width = percentage + "%";
            }, 300);
        });
    }

    // Run animation on page load
    animateSkills();

    // Re-run animation when clicking the Skills nav item
    if (skillsNav) {
        skillsNav.addEventListener("click", function () {
            setTimeout(animateSkills, 300); // Delay to match section transition
        });
    }
});






  


