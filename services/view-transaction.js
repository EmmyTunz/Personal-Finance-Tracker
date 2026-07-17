const BASE_URL = "https://my-wallet-3a6i.onrender.com"
async function loadTransactions() {
  const response = await fetch(`${BASE_URL}/transaction`);
  const data = await response.json();

  const transactions = data.map(item => item.Transaction);
  const list = document.getElementById("transaction-list");
  list.innerHTML = "";

  transactions.forEach(txn => {
    const item = document.createElement("li");
    item.textContent = `${txn.date} - ${txn.category} - N${txn.amount} - description: ${txn.note}`;
    list.appendChild(item);
  });

  document.getElementById("view-transaction-spinner").style.display = "none";
}

loadTransactions();
