# 📝 React Todo App

### _(with Edit, Toggle & Keyboard Support)_

A modern, fully-functional **Todo application built with React and Tailwind CSS**, focusing on **clean state management**, **component-driven architecture**, and **real-world UX features** like inline editing and keyboard shortcuts.

---

## 📸 Screenshots

### Main Interface

![alt text](image.png)

### Editing a Todo

![Edit Todo]
![alt text](image-1.png)

## ✨ Features

### ✅ Add Todos

- Add a new task using:
  - **Add button**
  - **Enter key**
- Prevents adding empty tasks

---

### 🗑️ Delete Todos

- Remove any todo instantly
- State updates immutably using `filter`

---

### ☑️ Toggle Completion

- Click on a todo to mark it as **completed**
- Completed tasks:
  - Appear faded
  - Are crossed out
- Toggle works by updating state immutably using `map`

---

### ✏️ Edit Todos (Inline Editing)

- Edit any todo directly in the list
- Toggle edit mode with an **Edit button**
- Input auto-fills with existing todo text
- Save edits by pressing:
  - **Enter key**
- Exit edit mode automatically after saving

---

### ⌨️ Keyboard Support

- **Enter key**:
  - Adds new todos
  - Saves edited todos
- Smooth UX without needing extra clicks

---

### 🎨 Modern UI with Tailwind CSS

- Responsive centered layout
- Rounded cards and inputs
- Dark theme design
- Focus rings and hover states
- Clean spacing and typography

---

## 🧠 Key Concepts Learned

This project focuses heavily on **core React fundamentals**:

### 🔹 State Management

- Centralized todo state in `App.jsx`
- Used `useState` correctly for:
  - Todo list
  - Input fields
  - Edit mode tracking

---

### 🔹 Props & Component Communication

- Parent (`App`) owns the state
- Child components:
  - `TodoList`
  - `TodoItem`
- Children notify parent using callback props

---

### 🔹 Controlled Components

- Inputs use `value` + `onChange`
- Avoided `defaultValue` for editable fields
- Ensured React is the single source of truth

---

### 🔹 Immutability

- No direct mutation of state
- Used:
  - `map` for updates
  - `filter` for deletions
  - Spread operator (`...todo`) for copying objects

---

## 🗂️ Project Structure

```text
src/
│
├── components/
│   ├── Header.jsx
│   ├── TodoList.jsx
│   └── TodoItem.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🛠️ Tech Stack

- **React** (Vite)
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **HTML5**
- **CSS3**

---

## 🧪 Future Improvements

- Persist todos using `localStorage`
- Add cancel edit with `Escape` key
- Add drag & drop reordering
- Add filters (All / Active / Completed)
- Add animations (Framer Motion)

---
