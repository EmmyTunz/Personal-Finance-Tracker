// javascript code for the dashboard
const BASE_URL = "https://my-wallet-3a6i.onrender.com";
async function displayDashboard() {
    const [balanceRes, incomeRes, expensesRes] = await Promise.all([
        fetch(`${BASE_URL}/balance`),
        fetch(`${BASE_URL}/total_income`),
        fetch(`${BASE_URL}/total_expenses`)
    ]);

    const balance = await balanceRes.json();
    const totalIncome = await incomeRes.json();
    const totalExpenses = await expensesRes.json();

    document.getElementById("balance").textContent = `₦${balance.toLocaleString()}`;
    document.getElementById("total-income").textContent = `₦${totalIncome.toLocaleString()}`;
    document.getElementById("total-expenses").textContent = `₦${totalExpenses.toLocaleString()}`;

    document.getElementById("balance-spinner").style.display = "none";
    document.getElementById("income-spinner").style.display = "none";
    document.getElementById("expenses-spinner").style.display = "none";
}

displayDashboard();