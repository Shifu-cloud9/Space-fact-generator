# Space-fact-generator

## Tech Stack
*Frontend*
HTML
CSS
JavaScript

*Backend*
Netlify Serverless Functions
Node.js

*AI*
Google Gemini API

*Deployment*
Netlify

*Version control*
Git
GitHub

*Environment/security*
Environment variables
.env
.gitignore

## How It Works

The basic flow is:

```text
USER
 ↓
WEBSITE
 ↓
NETLIFY SERVERLESS FUNCTION
 ↓
GEMINI API
 ↓
NETLIFY FUNCTION
 ↓
WEBSITE
 ↓
NEW SPACE FACT

```


Technical Architecture:
                    USER
                     │
               clicks button
                     │
                     ▼
              ┌──────────────┐
              │   FRONTEND   │
              │ HTML/CSS/JS  │
              └──────┬───────┘
                     │
                fetch request
                     │
                     ▼
              ┌──────────────┐
              │   NETLIFY    │
              │   FUNCTION   │
              └──────┬───────┘
                     │
                 API key
                     │
                     ▼
              ┌──────────────┐
              │  GEMINI API  │
              │ Generate fact│
              └──────┬───────┘
                     │
                generated fact
                     │
                     ▼
              ┌──────────────┐
              │   FRONTEND   │
              │ displays fact│
              └──────────────┘

              Three versions
              ```
                               COSMIC FACTS
                      │
          ┌───────────┼───────────┐
          │           │           │
        main      free-version  gemini-version
          │           │           │
       OpenAI      50 fixed      Gemini AI
                     facts       generated facts


                     
