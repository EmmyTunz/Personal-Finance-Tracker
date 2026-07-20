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
        budget: Number(document.getElementById("budget_amount_field").value),
        feeding: document.getElementById("feeding_amount_field").value,
        airtime_data: document.getElementById("airtime_amount_field").value,
        electricity: document.getElementById("electricity_amount_field").value,
        betting: document.getElementById("betting_amount_field").value,
        transfer: document.getElementById("transfer_amount_field").value,
    };

    const response = await fetch(`${BASE_URL}/budget/new`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newTransaction)
    });

    const statusMessage = document.getElementById("status-message");
    const result = await response.json()

    if (response.ok) {
        statusMessage.textContent = `${result.Message}!`;
        document.getElementById("transaction-form").reset();
    } else {
        statusMessage.textContent = "Something went wrong ❌";
    }

    submitBtn.disabled = false;
    submitText.textContent = "Create Budget";
    submitSpinner.style.display = "none";
}

document.getElementById("transaction-form").addEventListener("submit", handleSubmit);