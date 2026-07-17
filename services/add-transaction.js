const BASE_URL = "https://my-wallet-3a6i.onrender.com";
async function handleSubmit(event) {
    event.preventDefault();

    const newTransaction = {
        // id: 0,
        amount: Number(document.getElementById("amount").value),
        type: document.getElementById("type").value,
        category: document.getElementById("category").value,
        // date: new Date().toISOString(),
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
    }
}

document.getElementById("transaction-form").addEventListener("submit", handleSubmit);