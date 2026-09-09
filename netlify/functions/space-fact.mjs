export default async function handler() {
    try {
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "x-goog-api-key": process.env.GEMINI_API_KEY
                },

                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `
Give me ONE surprising, scientifically accurate space fact.

Rules:
- Under 40 words.
- Easy for a teenager to understand.
- It must be genuinely interesting.
- Do not make up information.
- Return ONLY the fact.
- No introduction.
- No quotation marks.
- No bullet points.
`
                                }
                            ]
                        }
                    ]
                })
            }
        );

        if (!response.ok) {
            const errorText = await response.text();

            console.error("Gemini API error:", errorText);

            return new Response(
                JSON.stringify({
                    error: "Gemini request failed."
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

        const fact =
            data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

        if (!fact) {
            throw new Error("Gemini returned no fact.");
        }

        return new Response(
            JSON.stringify({
                fact: fact
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

    } catch (error) {
        console.error("Server error:", error);

        return new Response(
            JSON.stringify({
                error: "Could not generate a space fact."
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