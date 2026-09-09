const button = document.getElementById("generateButton");
const fact = document.getElementById("fact");
const status = document.getElementById("status");

button.addEventListener("click", async () => {

    button.disabled = true;

    status.textContent = "Looking into the universe... 🌌";

    try {

        const response = await fetch(
            "/.netlify/functions/space-fact"
        );

        if (!response.ok) {
            throw new Error("Something went wrong.");
        }

        const data = await response.json();

        fact.textContent = data.fact;

        status.textContent = "✨";

    } catch (error) {

        console.error(error);

        fact.textContent =
            "Oops! The spacecraft lost connection.";

        status.textContent =
            "Try again in a moment.";

    } finally {

        button.disabled = false;

    }

});