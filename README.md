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
- (Optional) deployment via Vercel / Netlify (frontend), Heroku / Railway / Render (backend)  

---

## 📦 Setup & Installation  

### Prerequisites  
Make sure you have:  
- Node.js (v16+ recommended)  
- npm or yarn  

### Clone the repository  
```bash
git clone https://github.com/Pratham-Gudadhe/CamJam.git
cd CamJam

```bash
cd Backend
npm install

```bash
cd frontend
npm install


