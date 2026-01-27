# 🚀 Namaste React: Learning Log

> **Goal:** Mastering React.js from the ground up.
> **Status:** 🟢 Active | **Current Day:** 07

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

---

### ✅ Day 04: Talk is Cheap, Show Me the Code
**Date:** 2nd Jan 2026

Today marked the shift from "Learning Syntax" to "Building Systems." We started our main project (Food Ordering App) not by writing code, but by **Planning** first.

#### 🛠️ Key Concepts Mastered:
- [x] **Phase 1: Planning & Design:** Learned that coding is the *last* step. First comes the UI Mockup and Requirement Analysis.
- [x] **Phase 2: Low-Level Design (LLD):** Breaking down the UI into a **Component Hierarchy**.
- [x] **Phase 3: Code Structure:** Finalized the main layout (App Shell) which holds the application together.
- [x] **Props (Properties):** Arguments passed to components; Immutable data flow (Parent → Child).
- [x] **Config-Driven UI:** Using backend data to dictate frontend layout (e.g., Offers in different cities).
- [x] **List Rendering (Keys):** Why using `key` (unique ID) is crucial for React's Reconciliation Algorithm performance.

<details>
<summary><b>📐 Click to see the Component Architecture</b></summary>

We visualized the application as a Tree of Components.

**The App Layout:**
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
</details>

---

### ✅ Day 05: Let's Get Hooked 🪝
**Date:** 8th Jan 2026

Transitioned from static, hardcoded data to dynamic data management using **React Hooks**. Explored the difference between the **Data Layer** and the **UI Layer**.

#### 🛠️ Key Concepts Mastered:
- [x] **Exports:** Default (`export default`) vs Named (`export const`).
- [x] **React Hooks (`useState`):** Powerful utility functions to sync local variables with the UI.
- [x] **Virtual DOM & Reconciliation:** How React uses the Diffing Algorithm to update only changed nodes.
- [x] **Search & Filter Logic:** Implemented searching logic using `.filter()` and updated state to reflect results.

<details>
<summary><b>🧠 Click to see notes on Virtual DOM</b></summary>

**"The Virtual DOM prints the React Object."**

1.  **State Change** (`setSearchText`) triggers a Re-render.
2.  React creates a **New Virtual DOM** tree.
3.  **Diffing:** React compares it with the Old Virtual DOM.
4.  **Update:** It updates **only** the DOM nodes that changed (e.g., the text inside the input box). This makes React extremely fast.
</details>

---

### ✅ Day 06: Exploring the World 🌍
**Date:** 9th Jan 2026

Stepped out of the "Local" world and connected the app to the "Real" world using **Microservices** and **APIs**.

#### 🛠️ Key Concepts Mastered:
- [x] **Monolith vs Microservices:** Separation of concerns (UI, Backend, Auth).
- [x] **The `useEffect` Hook:** Managing Side Effects.
    - `[]`: Runs once (Component Did Mount).
    - `[dep]`: Runs when dependency changes.
- [x] **Debouncing:** Optimizing search performance to avoid excessive API calls.
- [x] **Shimmer UI:** Replaced generic loaders with professional Skeleton Screens.
- [x] **State Toggle:** Implemented Login/Logout toggle, learning how state updates trigger component re-renders.

<details>
<summary><b>🔄 Click to see notes on the "Infinite Loop" Trap</b></summary>

If you update state inside `useEffect` without a dependency array, you create a death loop:
1. Render Component.
2. `useEffect` runs.
3. API Call -> `setRestaurants`.
4. State Update -> **Re-Render**.
5. Go to Step 1.

**Fix:** Pass `[]` as the second argument to `useEffect`.
</details>

---

### ✅ Day 07: Finding the Path 🗺️
**Date:** 15th Jan 2026

Transformed the application from a simple one-page view into a fully navigable **Single Page Application (SPA)** using **React Router v6**. We learned how to manage URLs, create nested layouts, and handle errors gracefully without ever refreshing the browser.

#### 🛠️ Key Concepts Mastered:
- [x] **React Router DOM:**
    - `createBrowserRouter`: Defining the map of the application.
    - `RouterProvider`: The component that powers the routing.
- [x] **SPA vs MPA Architecture:**
    - **MPA (Multi-Page App):** Traditional. Reloads the entire page (HTML/CSS/JS) on every click.
    - **SPA (Single Page App):** Modern. Loads once. Swaps components instantly. **No Reload.**
- [x] **Routing Strategies:**
    - **Server-Side Routing:** Browser talks to the server for every URL change.
    - **Client-Side Routing:** React intercepts the URL and updates the DOM locally.
- [x] **Nested Routing (`<Outlet />`):**
    - Created a "Master Layout" where the **Header & Footer** stay fixed, and only the middle content changes.
- [x] **New Hooks:**
    - `useRouteError`: Catching 404s and API errors to show a custom "Oops!" page.
    - `useParams`: Reading dynamic values from the URL (e.g., getting `123` from `/restaurants/123`).

#### 🚀 Features Implemented:
- [x] **Router Configuration:** Implemented `appRouter` with paths for Home, About, Contact, and Error.
- [x] **Dynamic Restaurant Menu:**
    - Created a dynamic route `/restaurants/:resId`.
    - Clicking a card now takes the user to a specific Menu page.
- [x] **Mock Data Fallback:**
    - Bypassed Swiggy's API firewall (CORS blocking) by implementing a robust fallback strategy using local JSON data (`mockMenuData.json`).
- [x] **Image Error Handling:**
    - Added an auto-repair mechanism (`onError`) to swap broken images with a default placeholder instantly.
- [x] **Safe Navigation:** Replaced all `<a>` tags with `<Link>` components to prevent page reloads.

<details>
<summary><b>🔌 Click to see notes on &lt;Link&gt; vs &lt;a&gt; tag</b></summary>

| Feature | `<a>` Tag | `<Link>` Component |
| :--- | :--- | :--- |
| **Routing** | Server-Side | Client-Side |
| **Behavior** | Full Page Refresh (White Flash) | No Refresh (Smooth DOM Swap) |
| **State** | Resets all Redux/State variables | Preserves State |
| **Use Case** | External Links (Google, Facebook) | Internal App Navigation |

**Pro Tip:** `<Link>` is just a wrapper around `<a>`. It prevents the default browser behavior and uses the History API to change the URL.
</details>

<details>
<summary><b>🛡️ Click to see notes on Bypassing API Blocks (CORS/WAF)</b></summary>

**The Problem:** Swiggy's firewall (AWS WAF) detects `localhost` requests and returns `403 Forbidden` or `202 Accepted` HTML pages instead of JSON.

**The Fix (Mock Strategy):**
Instead of fighting the firewall, we used a **Hybrid Approach**:
1. Try to fetch from API.
2. If it fails (or returns HTML), catch the error.
3. Load data from `src/utils/mockMenuData.json` so development is never blocked.
</details>

### ✅ Day 08: Let's Get Classy 🏛️
**Date:** 16th Jan 2026

Deep dived into the "Old Way" of writing React to understand the history and legacy codebases. We explored **Class Based Components** and how they handle the Component Lifecycle differently from Hooks.

#### 🛠️ Key Concepts Mastered:
- [x] **Class Components:** Understanding `extends React.Component`, the `render()` method, and the `this` keyword.
- [x] **State Management (Old School):**
    - `constructor(props)`: Initializing state.
    - `super(props)`: Why we must call the parent constructor.
    - `this.setState()`: Updating state (and how it triggers a re-render).
- [x] **React Lifecycle Methods:**
    - **Mounting:** `constructor` → `render` → `DOM Update` → `componentDidMount` (API Calls).
    - **Updating:** `render` → `componentDidUpdate`.
    - **Unmounting:** `componentWillUnmount` (Cleanup).
- [x] **The Render vs Commit Phase:** How React batches updates for performance.

<details>
<summary><b>🔄 Click to see notes on The Lifecycle Hierarchy</b></summary>

**Parent vs Child Order:**
When a Parent component has multiple Children, React optimizes the process:
1.  **Render Phase:** Parent `constructor` → Parent `render` → Child 1 `constructor` → Child 1 `render` → Child 2 `constructor` → Child 2 `render`.
2.  **Commit Phase:** Child 1 `DidMount` → Child 2 `DidMount` → **Parent** `DidMount`.

**Why?** React wants to calculate the entire Virtual DOM tree (fast) before touching the real DOM (slow).
</details>

<details>
<summary><b>🪤 Click to see notes on The "Interval Trap"</b></summary>

In Single Page Apps (SPA), navigating away from a page **does not** automatically stop background tasks.
- **Problem:** If you start a `setInterval` in `componentDidMount` and don't stop it, it runs forever (Memory Leak).
- **Solution:** You **must** use `clearInterval` inside `componentWillUnmount`.
</details>

---

### ✅ Day 09: Optimizing our App ⚡
**Date:** 17th Jan 2026

Shifted focus from "Functionality" to **"Performance"**. We learned how to make the app scalable, modular, and fast by implementing industry-standard optimization techniques.

#### 🛠️ Key Concepts Mastered:
- [x] **Single Responsibility Principle (SRP):** Refactoring code so each component/function does exactly **one** thing.
- [x] **Custom Hooks:**
    - Extracting logic into reusable functions (e.g., `useRestaurantMenu`, `useOnlineStatus`).
    - **Rule:** Custom hooks must always start with the word `use` (for Linter detection).
- [x] **App Chunking (Code Splitting):**
    - Breaking the single large `index.js` bundle into smaller logical chunks.
    - Used `React.lazy()` for dynamic imports.
- [x] **Lazy Loading & Suspense:**
    - Loaded heavy components (like "Grocery") on-demand.
    - Used `<Suspense fallback={<Shimmer />}>` to handle the loading state "gap".

<details>
<summary><b>🦖 Click to see notes on Custom Hooks logic</b></summary>

We moved the API fetching logic **out** of the component.
- **`useRestaurantMenu(resId)`**:
    - *Input:* Restaurant ID.
    - *Output:* Restaurant Data.
    - *Benefit:* The Component doesn't care *how* data is fetched, only *that* it is fetched.
</details>

<details>
<summary><b>🐢 Click to see notes on Testing Lazy Loading</b></summary>

On local development, Lazy Loading is too fast to see the Fallback UI.
**How to verify:**
1. Open Chrome DevTools -> **Network Tab**.
2. Change throttling to **"Slow 3G"**.
3. Click the lazy-loaded link.
4. Result: You will clearly see the `<Shimmer />` loading state.
</details>

---

### 🔜 Upcoming Goals
- [x] **Episode 6:** Exploring the World (Microservices, useEffect & API Calls).
- [x] **Episode 7:** Finding the Path (React Router DOM & SPA).
- [ ] **Episode 8:** Let's get Classy (Class Components).
- [ ] **Episode 9:** Optimizing our App (Custom Hooks & Lazy Loading).

---
*Maintained by Sahil Gharte | 2026 SDE-2 Target* 🎯