document
  .getElementById("billing-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect user input from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const plan = document.getElementById("plan").value;

    // For now, let's just show an alert to confirm the submission
    alert("Payment successful! You have chosen the " + plan + " plan.");
    // Here you could connect to a backend to process the payment

    // Optionally, you can reset the form after submission
    document.getElementById("billing-form").reset();
  });
document
  .getElementById("billing-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Gather form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      address: document.getElementById("address").value,
      plan: document.getElementById("plan").value
    };

    // Send the form data to your server to forward to Discord
    fetch("/send-to-discord", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Your details have been sent to our team!");
      })
      .catch((error) => {
        console.error("Error sending details to Discord bot:", error);
      });
  });

// Payment Screenshot Upload
document
  .getElementById("submit-screenshot")
  .addEventListener("click", function () {
    const screenshot = document.getElementById("payment-screenshot").files[0];

    if (!screenshot) {
      alert("Please upload a payment screenshot.");
      return;
    }

    const formData = new FormData();
    formData.append("screenshot", screenshot);

    // Send the screenshot to your server (which will forward it to the bot)
    fetch("/send-screenshot-to-discord", {
      method: "POST",
      body: formData
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Payment screenshot sent!");
      })
      .catch((error) => {
        console.error("Error sending screenshot to Discord bot:", error);
      });
  });
