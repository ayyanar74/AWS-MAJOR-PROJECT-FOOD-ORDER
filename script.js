document.getElementById("orderForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        foodItem: document.getElementById("foodItem").value,
        quantity: document.getElementById("quantity").value,
        address: document.getElementById("address").value
    };

    fetch("API_URL_HERE", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(response => {
        document.getElementById("result").innerText = response.message;
    })
    .catch(error => console.error(error));
});
