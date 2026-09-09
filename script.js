const button = document.getElementById("generateButton");
const fact = document.getElementById("fact");
const status = document.getElementById("status");

button.addEventListener("click", async () => {

    button.disabled = true;

    fact.textContent = "Looking somewhere in the universe...";

    status.textContent = "Generating a fact ✦";

    try {

        const response = await fetch(
            "/.netlify/functions/space-fact"
        );

        if (!response.ok) {
            throw new Error("Request failed.");
        }

        const data = await response.json();

        if (!data.fact) {
            throw new Error("No fact received.");
        }

        fact.textContent = data.fact;

        status.textContent = "✦";

    } catch (error) {

        console.error(error);

        fact.textContent =
            "The universe is being unusually quiet. Try again.";

        status.textContent =
            "Something went wrong.";

    } finally {

        button.disabled = false;

    }
});