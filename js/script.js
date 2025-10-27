document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const mailtoLink = `mailto:your-email@example.com?subject=Trucking Inquiry from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
  window.location.href = mailtoLink;
});