# Chess game website

This is a responsive chess-playing web application with real-time multiplayer functionality. The frontend is developed using HTML5, CSS3, and JavaScript, while the backend logic and WebSocket server are implemented in C++.

## Table of Contents

- [Features](#features)
- [Installation](#installation)

## Features

- Responsive chessboard UI.
- Real-time multiplayer functionality using WebSocket technology.
- Backend chess game logic implemented in C++.
- Move validation and game state management.

# Installation

## Prerequisite

- Modern web browser (Chrome, Firefox, etc.).
- C++ compiler (g++ recommended).
- uWebSockets library for WebSocket server.

## Frontend Setup
1. Clone the repository:
   
    ```bash
    git clone https://github.com/your-username/chess-game.git
    cd chess-game/frontend
2. Open 'index.html' in your browser.

## Backend Setup
1. Install uWebSockets:
   ```bash
   git clone https://github.com/uNetworking/uWebSockets.git
   cd uWebSockets
   make
2. Compile and run the backend server:
   ```bash
   g++ WebSocketServer.cpp -o WebSocketServer -luWS -lz -lssl -lcrypto -luv
   ./WebSocketServer
