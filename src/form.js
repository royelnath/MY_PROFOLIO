const modal = document.getElementById('custom-alert');
const modalMsg = document.getElementById('modal-message');

document.getElementById('contact-form').addEventListener('submit', function (e) {
  // 1. Prevent the default form submission (stops the refresh)
  e.preventDefault();

  // 2. Set the text
  modalMsg.innerText = "SIGNAL_SENT: Your message has been encrypted and transmitted.";

  // 3. Show the modal
  modal.style.display = "flex";

  // 4. Clear the form fields
  this.reset();
});

function closeModal() {
  modal.style.display = "none";
}