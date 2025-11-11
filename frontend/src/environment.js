let IS_PROD = true;

const server = IS_PROD ? 
    "https://camjam-backend.onrender.com" :

    "https://localhost:8080"
    
export default server;