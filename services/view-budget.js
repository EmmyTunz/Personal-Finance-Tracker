const BASE_URL = "https://my-wallet-3a6i.onrender.com"
async function loadBudget() {
    const response = await fetch(`${BASE_URL}/budget`);
    const data = await response.json();

    const list = document.getElementById("list")
    list.innerHTML = ""
    
    const keys = Object.keys(data)
    for (const key of keys) {
        const item = document.createElement("li");
        item.textContent = `${key} limit: ₦${data[key]}`
        list.appendChild(item)
    }

    document.getElementById("budget-spinner").style.display = "none";
}

loadBudget()