# vvlink Product Specifications

**Date:** 2025-03-30
**Version:** 0.1 (Prototype Concept)
**Project Name:** vvlink

## 1. Overview

vvlink is a web-based educational game teaching 12-18 year olds how to use AI tools for simple game development. It uses a gamified, guided approach with a friendly AI mascot. This document outlines the product specifications for the initial prototype.

## 2. Target Audience & Persona (Prototype)

* **Age:** 12-18 years (Initial focus: 13 years old)
* **Gender:** Male (Initial focus)
* **Technical Skills:** Assumed basic digital literacy. Prototype target: Knows some Scratch, minimal Python, familiar with digital art concepts.
* **Motivations:** Interested in games, technology, AI (curiosity), creating things, learning new skills in a fun way.
* **Pain Points Addressed:** Traditional programming/art learning can be intimidating; AI tools are new and potentially confusing; desire for structured, engaging learning.

## 3. Core User Journey & Features (Prototype Scope)

The prototype focuses on the initial user journey through the first level(s).

**3.1. Onboarding / Entry:**
* (Future: User accounts/profiles).
* Prototype: Directly enters the learning pathway screen.

**3.2. Learning Pathway Screen:**
* Visually represents the linear learning path (Duolingo-style).
* Shows distinct Levels (e.g., "Level 1: AI Art Wizard").
* Shows completed levels/challenges and the next available challenge.
* User clicks on the next available challenge to enter the Level screen.

**3.3. Level 1: AI Art Wizard Apprentice**
* **Goal:** Learn to use text prompts for AI image generation to create game assets.
* **Interface:** Primarily a chat-based UI simulating interaction with the AI Guide ("Sparky").
    * **Challenge 1.1: Generate Character**
        * Sparky provides welcome message & explains task.
        * Sparky suggests a specific prompt (e.g., `chibi hero with green tunic, smiling`).
        * Guidance text hints user can try their own prompt.
        * User types prompt, hits "Generate".
        * Simulated AI generates image (shows pre-defined Mascot image).
        * Sparky gives celebratory feedback.
        * "Save for later" button appears below image. Clicking saves reference in app state & triggers browser download.
        * Challenge marked complete. Sparky confirms and prompts for next challenge.
    * **Challenge 1.2: Generate Different Pose**
        * Sparky explains task (make saved character strike a pose).
        * Sparky suggests a pose prompt (e.g., `ready for adventure pose`).
        * Guidance text hints user can try other poses.
        * User types pose prompt, hits "Generate".
        * Simulated AI combines stored character info + pose prompt, shows relevant pre-defined image.
        * Sparky gives positive feedback.
        * Challenge marked complete.
    * **(Future Challenges):** Generate background, items, different styles.

**3.4. Level 2: AI Quest Planner (Conceptual for Prototype)**
* **Goal:** Learn to use AI to brainstorm simple game ideas & structure.
* **Interface:** Likely still chat-based or a simple form/template interface.
* **Challenges:**
    * Use AI assistant to get game ideas based on keywords.
    * Use AI assistant to define Goal, Player Character (using Level 1 asset), Obstacles.
    * **Tangible Output:** A visually presented "Game Plan" summary sheet.

**3.5. Level 3: AI Code Conjurer (Conceptual for Prototype)**
* **Goal:** Learn to use AI assistance to write/understand simple game code (e.g., character movement).
* **Interface:** Split view? Chat UI + Simple Code Editor + Game Canvas preview.
* **Challenges:**
    * Ask AI for code to make character appear/move.
    * Implement code snippet (Python-like or visual script).
    * AI-Assisted Debugging: Introduce simulated errors, guide user to ask AI for hints to fix them.
    * **Tangible Output:** Character responding to input on the game canvas.

## 4. Gamification & UX Principles

* **Linear Progression (CD2: Development & Accomplishment):** Duolingo-style path, clear steps.
* **Clear Guidance (Reduces CD8: Loss & Avoidance - due to frustration):** Explicit instructions and prompt suggestions from Sparky.
* **Positive Reinforcement (CD2):** Celebratory messages, visual rewards (seeing image/code work), badges (future), points (future).
* **Tangible Output (CD2, CD4: Ownership):** User sees generated images, plans, running code immediately.
* **Encourage Creativity (CD3: Empowerment):** Optional guidance allowing users to try own prompts/ideas.
* **AI Mascot (CD5: Social Influence - as guide, CD7: Unpredictability - AI interaction):** Sparky provides context, personality, and guidance.
* **Focus on AI Tools:** Frame challenges around *using the tool* (prompting, asking debugging questions).
* **"Don't Make Me Think":** Keep cognitive load low for initial steps.

## 5. Content Requirements (Prototype)

* Mascot ("Sparky") design: Chibi Link-style, friendly expressions.
* Pre-defined images for Level 1 simulation:
    * Mascot smiling (`chibi_link_smiling.png`)
    * Mascot in different poses (e.g., `chibi_link_guard_pose.png`, `chibi_link_waving.png`)
    * (Optional backups: generic robot, monster etc. if handling custom prompts)
* Scripted dialogue/prompts/hints for Sparky for Level 1 challenges.

## 6. Future Considerations (Beyond Prototype)

* User accounts & persistent progress saving (backend).
* Integration with real AI models (Image Gen APIs, LLMs for code/planning).
* More levels covering different AI tools and game dev stages (sound, simple physics, UI).
* More sophisticated gamification (points, leaderboards, skill trees).
* Community features (sharing creations).
* Monetization strategy (if any).