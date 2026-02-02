# 🎮 Tic Tac Toe – React Game

A simple and interactive **Tic Tac Toe game** built using **React**, **Vite**, and **Tailwind CSS**.  
This project demonstrates core React concepts like **state management** and **side effects**, while maintaining a clean and responsive UI.

---

## 🚀 Features

- Classic **2-player Tic Tac Toe** gameplay
- Interactive UI with instant updates
- Highlights the game winner or draw
- Game reset functionality
- Responsive design using Tailwind CSS
- Clean and beginner-friendly code structure

---

## 🛠️ Tech Stack

- **React** – UI library
- **Vite** – Fast build tool and dev server
- **Tailwind CSS** – Utility-first CSS framework
- **JavaScript (ES6+)**

---

## 📚 React Concepts Used

- `useState`
  - To manage the game board state
  - To track the current player
  - To store the game result (winner/draw)

- `useEffect`
  - To check the game status after every move
  - To determine a winner or draw condition

---

## 📂 Project Structure

```

tic-tac-toe/
├── src/
│ ├── components/
│ │ └── Board.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── public/
├── package.json
└── README.md

```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project folder
cd tic-tac-toe

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will run on:
👉 **[http://localhost:5173](http://localhost:5173)**

---

## 🧠 Game Logic Overview

- The board is represented as an array of 9 cells.
- Players alternate turns between **X** and **O**.
- After each move:
  - `useEffect` checks for winning combinations.
  - If no winner and all cells are filled, the game is declared a draw.

---

## 🎨 Styling

- Tailwind CSS is used for:
  - Layout and spacing
  - Button styling
  - Hover and transition effects

- Fully responsive across devices.

---

## 🔮 Future Enhancements

- Single-player mode (AI opponent)
- Score tracking
- Highlight winning cells
- Sound effects and animations
- Dark mode support

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

---

## 📄 License

This project is open-source and available under the **MIT License**.
