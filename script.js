body {
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #ff9ec4, #ff4d88);
  font-family: Arial, sans-serif;
  overflow-x: hidden;
  text-align: center;
  color: white;
}

.hidden {
  display: none;
}

#hacker {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: #00ff00;
  font-family: monospace;
  font-size: 24px;
}

#slideshow img {
  width: 300px;
  height: auto;
  border-radius: 20px;
  margin-top: 40px;
  box-shadow: 0 0 20px rgba(255, 0, 100, 0.7);
}

button {
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 20px;
  background-color: #ff1a75;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #ff0066;
  transform: scale(1.1);
}

#secret, #final {
  margin-top: 100px;
  font-size: 22px;
}

/* ❤️ HEART RAIN EFFECT */

.heart {
  position: fixed;
  top: -10px;
  color: #ff4d88;
  font-size: 20px;
  animation: fall linear forwards;
  z-index: 9999;
  pointer-events: none;
}

@keyframes fall {
  to {
    transform: translateY(100vh);
    opacity: 0;
  }
}
