// SWYNEX Task 3 - Accessible Modals + Form Validation
const viewModal = document.getElementById("viewModal");
const profileModal = document.getElementById("profileModal");
let lastFocused = null;

function openModal(modal) {
  lastFocused = document.activeElement;
  modal.showModal();
  modal.querySelector("button").focus();
}
function closeModal(modal) {
  modal.close();
  if (lastFocused) lastFocused.focus();
}
document.querySelectorAll("[data-open-modal]").forEach(btn => {
  btn.addEventListener("click", () => openModal(viewModal));
});
document.getElementById("openProfileBtn").addEventListener("click", () => openModal(profileModal));
document.querySelectorAll("[data-close-modal]").forEach(btn => {
  btn.addEventListener("click", () => closeModal(btn.closest("dialog")));
});
document.querySelectorAll("dialog").forEach(d => {
  d.addEventListener("close", () => { if (lastFocused) lastFocused.focus(); });
});

// Form validation - accessible error with role=alert
document.getElementById("expenseForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const amount = document.getElementById("amount").value;
  const error = document.getElementById("form-error");
  if (!title || !amount) {
    error.textContent = "Please fill Title and Amount. Both are required.";
    document.getElementById("title").focus();
    return;
  }
  error.textContent = "";
  alert("Expense added: " + title + " - Rs." + amount);
  e.target.reset();
});
