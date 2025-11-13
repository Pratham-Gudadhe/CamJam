# 🎥 CamJam  

A real-time video conferencing web application built with React, inspired by Zoom.  
Users can create or join virtual meeting rooms, share audio/video, chat, and collaborate seamlessly.

---

## 🧭 Table of Contents  

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Setup & Installation](#setup-installation)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [Configuration](#configuration)  
- [Contributing](#contributing)  
- [License](#license)  

---

## 🚀 Features  

- Create or join a meeting room via unique URL  
- Real-time video & audio streaming using WebRTC  
- Text chat within a meeting room  
- Mute/unmute audio, enable/disable video  
- Responsive user interface  
- Backend signalling with WebSocket (or similar)  
- Room participant list & basic UI controls  

---

## 🛠️ Tech Stack  

**Frontend (client)**:  
- React (JavaScript)  
- CSS / optional UI framework  
- WebRTC APIs for peer-to-peer media  
- WebSocket / Socket.IO for signalling  

**Backend (server)**:  
- Node.js + Express  
- WebSocket / Socket.IO server for signalling  
- Room management logic  

**Other tools**:  
- UUID / nanoid for unique room IDs  
- dotenv for environment variables  
- Deployment via Render  

---

## 📁 Folder Structure  
CamJam/
├── Backend/                # Node.js + Express backend (signalling server)
│   ├── app.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── package.json
│   └── .env
├── frontend/               # React client app
│   ├── src/
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── styles/
│   │   ├── app.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── .env
├── .gitignore
└── README.md  

## 🤝 Contributing  

Thanks for your interest in contributing!  
1. Fork the repository  
2. Create your feature branch (git checkout -b feature/YourFeature)  
3. Commit your changes (git commit -m 'Add some feature')  
4. Push to your fork (git push origin feature/YourFeature)  
5. Open a Pull Request  

Please make sure your code follows the existing style and includes relevant comments and documentation.  

## ✨ Author  

Developed by Pratham Gudadhe  
Feel free to open issues or reach out via GitHub.  
