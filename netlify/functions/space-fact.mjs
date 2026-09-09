export default async function handler() {
    try {
        const response = await fetch(
            "https://api.openai.com/v1/responses",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
                },

                body: JSON.stringify({
                    model: "gpt-5-mini",

                    input: "Give me ONE surprising, scientifically accurate space fact. Keep it under 40 words. Explain it so a teenager can understand it. Return only the fact, with no introduction or quotation marks."
                })
            }
        );

        if (!response.ok) {
            const errorText = await response.text();

            console.error(errorText);

            return new Response(
                JSON.stringify({
                    error: "OpenAI request failed."
                }),
                {
                    status: 500,
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
        }

        const data = await response.json();

        return new Response(
            JSON.stringify({
                fact: data.output_text
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

    } catch (error) {
        console.error(error);

        return new Response(
            JSON.stringify({
                error: "Server error."
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );
    }
}