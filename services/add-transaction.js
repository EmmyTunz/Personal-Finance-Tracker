const BASE_URL = "https://my-wallet-3a6i.onrender.com";
async function handleSubmit(event) {
    event.preventDefault();

    const submitBtn = document.getElementById("submit-btn");
    const submitText = document.getElementById("submit-text");
    const submitSpinner = document.getElementById("submit-spinner");

    submitBtn.disabled = true;
    submitText.textContent = "Adding...";
    submitSpinner.style.display = "block";

    const newTransaction = {
        amount: Number(document.getElementById("amount").value),
        type: document.getElementById("type").value,
        category: document.getElementById("category").value,
        note: document.getElementById("note").value,
    };

    const response = await fetch(`${BASE_URL}/transaction/new`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newTransaction)
    });

    const statusMessage = document.getElementById("status-message");

    if (response.ok) {
        statusMessage.textContent = "Transaction added ✅";
        document.getElementById("transaction-form").reset();
    } else {
        statusMessage.textContent = "Something went wrong ❌";
    }

    submitBtn.disabled = false;
    submitText.textContent = "Add Transaction";
    submitSpinner.style.display = "none";
}

document.getElementById("transaction-form").addEventListener("submit", handleSubmit);