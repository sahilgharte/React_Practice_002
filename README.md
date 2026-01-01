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

### 🔜 Upcoming Goals
- [ ] **Episode 4:** Talk is Cheap, Show me the Code (Components & Props).
- [ ] **Episode 5:** Let's get Hooked (State & Hooks).

---
*Maintained by Sahil Gharte | 2026 SDE-2 Target* 🎯