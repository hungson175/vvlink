# vvlink Technical Specifications

**Date:** 2025-03-30
**Version:** 0.1 (Prototype Concept)
**Project Name:** vvlink

## 1. Overview

This document outlines the technical specifications for the initial vvlink prototype, focusing on a web-based educational game built with ReactJS and Python. The primary goal of the prototype is to validate the core user experience and learning flow for the first levels, using frontend simulation for AI interactions.

## 2. Architecture

* **Type:** Single Page Application (SPA) with potential for future backend integration.
* **Frontend:** ReactJS
* **Backend:** Python (Flask or FastAPI recommended) - Minimal role in prototype (primarily for serving the React app if needed, future state persistence).
* **Deployment:** Static web hosting (e.g., Netlify, Vercel, GitHub Pages) for the React frontend prototype.

## 3. Frontend (ReactJS)

**3.1. Core Libraries/Frameworks:**
* React (latest stable version)
* State Management: Choose one (e.g., Zustand for simplicity, Context API for built-in, Redux Toolkit for scalability). Required for managing user progress between challenges, chat history, current challenge state, stored character info.
* Routing: `react-router-dom` for handling navigation between pathway screen and level/challenge screens.
* Styling: Choose one (e.g., Tailwind CSS, CSS Modules, Styled Components, Material UI, Chakra UI).

**3.2. Key Components (Prototype Scope):**

* **`App.js` / Main Router:** Handles top-level routing (Pathway vs. Level).
* **`PathwayScreen` Component:**
    * Displays the visual learning path.
    * Renders level nodes/icons.
    * Highlights completed/current/locked levels based on app state.
    * Handles navigation to the `LevelScreen`.
* **`LevelScreen` Component:**
    * Acts as a container for the current challenge UI.
    * Loads the specific challenge component based on user progress/routing.
    * Potentially displays level title/progress.
* **`ChallengeContainer` (e.g., `Level1_ChallengeContainer`):**
    * Manages state specific to the current challenge (e.g., current prompt input, message history).
    * Renders the main UI for the challenge (e.g., Chat Interface).
    * Handles challenge completion logic (updating app state).
* **`ChatInterface` Component (for Level 1):**
    * `MessageList` Component: Renders an array of message objects. Handles scrolling.
    * `MessageBubble` Component: Renders individual messages. Conditionally renders text, images (with 'Save' button), user prompts, AI responses based on message type/sender.
    * `ChatInput` Component: Contains text input field and "Generate" button. Handles user input and triggers the generation process.
* **(Future Level 3 Components):**
    * `CodeEditor` Component: Integrates a library like `@monaco-editor/react` or `react-codemirror2`.
    * `GameCanvas` Component: Uses HTML Canvas API directly, or a library like `react-konva`, `pixi.js` for rendering the simple game preview.

**3.3. State Management Strategy (Prototype):**
* Global state should store:
    * User progress (e.g., highest level/challenge completed).
    * Data carried between challenges (e.g., Level 1 character prompt/image URL).
* Local component state can manage:
    * Current input field values.
    * Message history for the current chat session.

**3.4. AI Simulation (Frontend - Prototype):**
* Implement simulation logic within the relevant React components (e.g., `ChallengeContainer` or `ChatInterface`).
* On "Generate" click:
    * Use `setTimeout` to simulate processing time.
    * Based on keywords in the user prompt (or hardcoded for suggested prompts), select a pre-defined image URL from a local mapping/array.
    * Update the chat history state with the simulated AI response (text + image URL).
* Store pre-defined images within the `public` folder of the React project.

**3.5. "Save for later" Logic (Level 1):**
* Button click triggers two actions:
    1.  Programmatically create an `<a>` tag with the `download` attribute pointing to the image URL and click it to initiate browser download.
    2.  Update the global React state to store the relevant character information (e.g., `{ characterPrompt: '...', characterImageUrl: '...' }`) for use in Challenge 1.2.

## 4. Backend (Python - Flask/FastAPI)

**4.1. Prototype Role:**
* **Minimal:** Could potentially just serve the built React application files.
* **No database interaction required for the initial frontend-simulated prototype.**

**4.2. Future Considerations (API Endpoints):**
* `/api/user/progress` (GET, POST): Load/save user progress (completed challenges, stored data). Requires user authentication.
* `/api/generate/image` (POST): (If replacing simulation) Proxy requests to a real AI image generation API. Requires API key management.
* `/api/generate/code` (POST): (If needed for Level 3+) Proxy requests to an LLM API for code suggestion/debugging.

## 5. Build & Deployment (Prototype)

* Use Create React App or Vite for bootstrapping the React project.
* Build the static React application (`npm run build`).
* Deploy the contents of the `build` folder to any static hosting provider.

## 6. Key Considerations

* Ensure component reusability where possible.
* Manage state effectively to ensure smooth transitions between challenges.
* Keep the initial simulated AI logic simple and focused on validating the UX flow.