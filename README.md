# 🚀 Namaste React: Learning Log

> **Goal:** Mastering React.js from the ground up.
> **Status:** 🟢 Active | **Current Day:** 03

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![Parcel](https://img.shields.io/badge/parcel-%23a6b39b.svg?style=for-the-badge&logo=parcel&logoColor=white) ![Babel](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white)

---

## 📅 Daily Progress Tracker

### ✅ Day 01: Inception
**Date:** 29th Dec 2025

- [x] **React Philosophy:** Understood what React is and why it exists.
- [x] **React vs ReactDOM:** Learned the difference between the core library and the DOM renderer.
- [x] **Hello World:** Created the first program using raw `React.createElement`.
- [x] **Code Push:** Initial code committed to Git.

---

### ✅ Day 02: Igniting Our App
**Date:** 30th Dec 2025

Today was about setting up a professional **Production-Ready** environment using **Bundlers** and **NPM**.

#### 🛠️ Key Concepts Mastered:
- [x] **Version Control:** Git Initialization, Branching & Merging.
- [x] **NPM Architecture:**
    - `package.json` (The Menu / Configuration).
    - `package-lock.json` (The Receipt / Exact Versioning).
- [x] **.gitignore:** Managing strict exclusions (ignoring `node_modules` & `.env`).
- [x] **Bundlers (Parcel):** Understanding why we need a bundler (Compression, HMR, Minification).
- [x] **React 18 Architecture:**
    - `react-dom` = **Legacy Gate** (React 17 Blocking Mode).
    - `react-dom/client` = **Modern Gate** (React 18 Concurrent Mode).

<details>
<summary><b>🚀 Click to see notes on "Why Parcel?"</b></summary>

I learned that **Parcel** is a "Beast" that handles everything with **Zero Configuration**:
- **HMR (Hot Module Replacement):** Instant updates without refresh.
- **File Watching:** C++ based fast watcher.
- **Caching (`.parcel-cache`):** Makes subsequent builds lightning fast.
- **Minification & Tree Shaking:** Removes unused code and comments.
- **HTTPS on Localhost:** Easy secure testing.
</details>

---

### ✅ Day 03: Laying the Foundation
**Date:** 1st Jan 2026

Moved from the "Hard Way" (`React.createElement`) to the "Developer Way" (**JSX**). Understood that JSX is not magic—it's just JavaScript syntax that gets transpiled.

#### 🛠️ Key Concepts Mastered:
- [x] **NPM Scripts:** Created custom scripts (`"start"`, `"build"`) to standardize development workflows.
- [x] **JSX Engine:** Learned that JSX is **NOT** HTML. It is an XML-like syntax for JavaScript.
- [x] **The Babel Pipeline:**
    - **Role:** Babel is the Transpiler that converts JSX into Browser-Readable code.
    - **The Flow:** `JSX` ➡ (Babel) ➡ `React.createElement` ➡ (JS Engine) ➡ `JS Object` ➡ (ReactDOM) ➡ `HTML Element`.
- [x] **React Components:**
    - **Functional Components:** Standard JS functions that return JSX.
    - **Component Composition:** Nesting components inside one another.
- [x] **Security (XSS):** How React sanitizes data in JSX to prevent Cross-Site Scripting attacks.

<details>
<summary><b>⚙️ Click to see notes on Transpilation (Babel)</b></summary>

- **Problem:** Browsers (V8 Engine) do not understand `<JSX />` syntax.
- **Solution:** Babel compiles "Modern Code" (JSX) into "Browser Code" (ECMAScript).
- **Parcel's Role:** It manages Babel automatically so we don't have to configure it manually.
</details>

<details>
<summary><b>⚔️ Click to see notes on JSX vs HTML</b></summary>

| Feature | HTML 🟠 | JSX 🔵 | Reason |
| :--- | :--- | :--- | :--- |
| **Classes** | `class="box"` | `className="box"` | `class` is a reserved JS keyword. |
| **Tags** | Optional closing | **Mandatory** closing | JSX follows strict XML rules. |
| **Structure** | Multiple roots OK | **1 Parent Rule** | A JS function cannot return 2 objects. |
| **JS Logic** | Not possible | `{ expression }` | Power of JS inside HTML. |
</details>

<details>
<summary><b>🧩 Click to see notes on Components</b></summary>

- **Functional Component:** A normal JS function returning JSX. Must start with a **Capital Letter**.
- **Composition:** `Container` renders `Title`. (`<Container><Title /></Container>`).
- **⚠️ Anti-Pattern:**
  - ✅ `<Title />`: React treats it as a Component (Hooks work).
  - ❌ `{Title()}`: React treats it as a Function Call (Hooks break).
</details>

<details>
<summary><b>🛡️ Click to see notes on Security (XSS)</b></summary>

- **Scenario:** Hacker tries to inject `<script>stealData()</script>` via a variable.
- **React's Defense:** React automatically **escapes** the string.
- **Result:** It renders as harmless text, protecting the app from Cross-Site Scripting.
</details>

---

### ✅ Day 04: Talk is Cheap, Show Me the Code
**Date:** 2nd Jan 2026

Today marked the shift from "Learning Syntax" to "Building Systems." We started our main project (Food Ordering App) not by writing code, but by **Planning** first.

#### 🛠️ Key Concepts Mastered:
- [x] **Phase 1: Planning & Design:** Learned that coding is the *last* step. First comes the UI Mockup and Requirement Analysis.
- [x] **Phase 2: Low-Level Design (LLD):** Breaking down the UI into a **Component Hierarchy**.
- [x] **Phase 3: Code Structure:** Finalized the main layout (App Shell) which holds the application together.
- [x] **Component Decomposition:** Split the "Monolith" into small, reusable parts.
### 🚀 Progress
- **Shifted to React:** Officially moved the development process to the React framework.
- **UI Refresh:** Implemented initial UI changes and container structures using JSX.

### 🧠 Key Learnings: Styling
- **Inline Styling Mechanism:** - Learned that in React, the `style` attribute accepts a **JavaScript Object** instead of a CSS string.
  - *Example:* Defined styles as variables in the script (e.g., `const containerStyle = { color: 'blue' }`) and assigned them to the `div`.

- **⚠️ Best Practice Alert:** - While inline styling works for quick logic, I learned it is generally **not the preferred way** to write CSS in production.
  - *Drawbacks:* It clutters the component code, causes performance issues on large renders, and lacks support for essential CSS features like Media Queries and Pseudo-classes (`:hover`, `:focus`).

### 🔜 Next Steps
- Explore better styling alternatives (CSS Modules or Tailwind) to fix the inline styling drawbacks.

### 🧠 Core Concepts Learned
- **Props (Properties):**
  - **Mental Model:** Props are simply "arguments passed to a function."
  - **Behavior:** They allow data to flow from Parent → Child and are **read-only** (immutable).
  
- **Config-Driven UI:**
  - **Concept:** The UI structure is not hardcoded but dictated by the backend data (e.g., specific offers/layouts for different cities like Mumbai vs. Delhi).
  - **Industry Standard:** This allows for dynamic updates without deploying new frontend code.

- **List Rendering & Keys:**
  - **The Rule:** Always pass a unique `key` prop when using `.map()`.
  - **The "Why":** React's **Reconciliation Algorithm** uses keys to identify which specific items have changed, added, or removed.
  - **Optimization:** Using unique IDs (from API) instead of Array Indexes prevents performance bottlenecks and unnecessary re-renders of the entire list.

### 🛠️ Architecture & Code Changes
- **API Integration (Swiggy):**
  - Implemented the `fetch()` logic to consume live data from the Swiggy Public API.
  - **Separation of Concerns:** Moved hardcoded URL strings to a dedicated `utils/constants.js` file to avoid magic strings in the codebase.

- **Component Structure:**
  - **Parent:** Fetches data and manages state.
  - **Child (RestaurantCard):** Pure presentation component that receives data via `props`.

### 📝 Note to Self
> "Never use the array index as a key if the list order can change. Always use a unique ID."

<details>
<summary><b>📐 Click to see the Component Architecture</b></summary>

We visualized the application as a Tree of Components.

**The App Layout:**
```text
AppLayout (Parent)
  ├── Header Component
  │     ├── Logo
  │     └── Nav Items
  │
  ├── Body Component (Main Container)
  │     ├── Search Bar
  │     └── Restaurant Container
  │           └── Restaurant Card
  │
  └── Footer Component
        ├── Copyright
        └── Links

---
</details>

###✅ Day 05: Let's Get Hooked 🪝
Date: 8th Jan 2026

Transitioned from static, hardcoded data to dynamic data management using React Hooks. Explored the difference between the Data Layer and the UI Layer.

🛠️ Key Concepts Mastered:
[x] Exports:

Default Export: export default Header; (One per file).

Named Export: export const CDN_URL; (Multiple per file).

[x] React Hooks (useState):

Super-powerful utility functions given by React.

Used to create local state variables that keep the UI in sync with data.

[x] Virtual DOM & Reconciliation:

Virtual DOM: A lightweight JavaScript Object that is a representation of the actual DOM.

Reconciliation: The process (Diffing Algorithm) React uses to compare the New V-DOM with the Old V-DOM and update only what changed.

🚀 Features Implemented:
[x] Search Functionality (Controlled Component):

Bound the input box to a state variable (searchText).

Why? So React can control the input value, allowing features like "Reset" to clear the text programmatically.

[x] Filter Logic:

Implemented a "Top Rated Restaurants" button (Ratings > 4.3).

Used the .filter() method to update the filteredRestaurants state.

[x] Reset Logic:

Created a Reset button that clears both the search text and the list filters simultaneously.

<details> <summary><b>🧠 Click to see notes on Virtual DOM</b></summary>

"The Virtual DOM prints the React Object."

When we write <Body />, React compiles it into a JS Object.

State Change (setSearchText) triggers a Re-render.

React creates a New Virtual DOM tree.

Diffing: React compares it with the Old Virtual DOM.

Update: It updates only the DOM nodes that changed (e.g., the text inside the input box). This makes React extremely fast.

</details>

🔜 Upcoming Goals
[x] Episode 4: Talk is Cheap, Show me the Code (Components & Props).

[x] Episode 5: Let's get Hooked (State & Hooks).

[ ] Episode 6: Exploring the World (Microservices, useEffect & API Calls).

[ ] Episode 7: Finding the Path (React Router & SPA).

Maintained by Sahil Gharte | 2026 SDE-2 Target 🎯