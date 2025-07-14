body {
  background: radial-gradient(circle, #111, #000);
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card-wrapper {
  text-align: center;
}

.scratch-card {
  position: relative;
  width: 350px;
  height: 200px;
  background: url('assets/golden-bg.jpg') no-repeat center/cover;
  border-radius: 20px;
  box-shadow: 0 0 20px gold;
  overflow: hidden;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 20px;
}

.reward-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  text-align: center;
  color: black;
  font-weight: bold;
  padding: 10px;
  max-width: 80%;
  z-index: 1;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
}

.hidden {
  display: none;
}

button {
  margin-top: 20px;
  background: gold;
  color: #111;
  padding: 10px 25px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 0 10px gold;
}
