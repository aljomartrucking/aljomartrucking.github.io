
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const nameValid = name !== "";
  const emailValid = email.includes("@") && email !== "";
  const messageValid = message !== "";

  if (!nameValid || !emailValid || !messageValid) {
    alert("Please complete all fields that has * with a valid information.");
    return;
  }

  const mailtoLink = `mailto:aljomartrucking@gmail.com?subject=Trucking Inquiry from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
  window.location.href = mailtoLink;

  // Show Bootstrap toast
  const toast = new bootstrap.Toast(document.getElementById("contactToast"));
  toast.show();

  // Clear form
  this.reset();
});
















