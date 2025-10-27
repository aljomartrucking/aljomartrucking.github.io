

// document.getElementById('contactForm').addEventListener('submit', function (e) {
//   e.preventDefault();
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const message = document.getElementById('message').value;

//   const mailtoLink = `mailto:aljomartrucking@gmail.com?subject=Trucking Inquiry from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
//   window.location.href = mailtoLink;
// });


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

  // Show Bootstrap toast
  const toast = new bootstrap.Toast(document.getElementById("contactToast"));
  toast.show();

  // Clear form
  this.reset();
});


// document.getElementById('contactForm').addEventListener('submit', function (e) {
//   const name = document.getElementById('name').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const message = document.getElementById('message').value.trim();

//   if (!name || !email.includes("@") || !message) {
//     e.preventDefault();
//     alert("Please complete all fields with valid information.");
//     return;
//   }

//   e.preventDefault(); // Prevent immediate submission

//   // Show spinner
//   document.getElementById('spinner').style.display = 'block';

//   // Delay before showing toast and submitting
//   setTimeout(() => {
//     // Hide spinner
//     document.getElementById('spinner').style.display = 'none';

//     // Show toast
//     const toast = new bootstrap.Toast(document.getElementById("contactToast"));
//     toast.show();

//     // Submit form (if using FormSubmit)
//     this.submit();
//   }, 15000); // 15-second delay
// });





// document.getElementById('contactForm').addEventListener('submit', function (e) {
//   const name = document.getElementById('name').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const message = document.getElementById('message').value.trim();

//   if (!name || !email.includes("@") || !message) {
//     e.preventDefault();
//     alert("Please complete all fields with valid information.");
//     return;
//   }

//   e.preventDefault(); // Prevent immediate submission

//   // Show spinner
//   document.getElementById('spinner').style.display = 'block';

//   // Simulate delay and submit
//   setTimeout(() => {
//     // Hide spinner
//     document.getElementById('spinner').style.display = 'none';

//     // Show success toast
//     const toast = new bootstrap.Toast(document.getElementById("contactToast"));
//     toast.show();

//     // Submit form
//     this.submit();
//   }, 3000); // 3-second delay

//   // Optional: Failsafe timeout if server hangs
//   setTimeout(() => {
//     document.getElementById('spinner').style.display = 'none';
//     alert("Server is taking too long to respond. Please try again later.");
//   }, 15000); // 15-second failsafe
// });

















