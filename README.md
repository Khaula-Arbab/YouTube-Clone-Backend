# 🎬 YouTube Clone Backend

A backend project built while learning **Express.js** and **MongoDB**, inspired by **Chai aur Code** tutorials.  
This project focuses on creating a simplified version of YouTube with user and admin dashboards, video history, likes, comments, and more — built step-by-step to understand how real-world backend systems work.

---

## 📚 Project Overview

This project is part of my backend learning journey.  
It covers:
- Understanding and implementing **Express.js basics** (`.get`, `.listen`, `.env`)
- Learning how to **model data** with **Mongoose**
- Building **RESTful APIs**
- Connecting the **frontend with backend**
- Managing **users, admins, videos, likes, comments, and history**

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-------------|
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Environment Variables | dotenv |
| Version Control | Git & GitHub |

---

## 📁 Folder Structure

```
📦 youtube-backend
 ┣ 📂 models          # Mongoose schemas (User, Video, Comment, etc.)
 ┣ 📂 routes          # API routes (userRoutes.js, videoRoutes.js)
 ┣ 📂 controllers     # Controller logic for routes
 ┣ 📂 config          # Database connection and environment setup
 ┣ 📜 .env            # Environment variables (not uploaded to GitHub)
 ┣ 📜 package.json    # Project dependencies and scripts
 ┣ 📜 main.js         # Entry point of the backend server
 ┗ 📜 README.md        # Project documentation
```

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally 👇

1. **Clone the repository**
   ```bash
   git clone https://github.com/Khaula-Arbab/Youtube-Clone-Backend.git
   ```

2. **Navigate into the project folder**
   ```bash
   cd youtube-backend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a `.env` file** in the root directory and add the following:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. Open your browser and visit:
   ```
   http://localhost:5000
   ```

---

## 🧩 Features (Planned & Implemented)

✅ Basic Express Server Setup  
✅ MongoDB Connection using Mongoose  
⬜ User Registration & Authentication  
⬜ Admin Dashboard  
⬜ Video Uploads  
⬜ Watch History  
⬜ Likes and Comments  
⬜ API Documentation  

*(The list will update as the project grows!)*

---

## 🧠 Data Modeling

All database entities (User, Video, Comment, Like, History) are designed using **Eraser.io**, which helps visualize the relationships between them.  

🧾 You can view the ER diagram here:  
👉 [Eraser Data Model Link](https://app.eraser.io/workspace/example)

---

## 🛠️ Commands Reference

| Command | Description |
|----------|-------------|
| `npm install` | Installs all dependencies |
| `npm run dev` | Starts the development server |
| `npm start` | Starts the production server |
| `node main.js` | Runs the app manually |

---

## 🧰 Dependencies

| Package | Purpose |
|----------|----------|
| express | To create the backend server |
| mongoose | To model and interact with MongoDB |
| dotenv | To manage environment variables |
| nodemon | For auto-restart during development |

---

## 🧾 API Overview (Coming Soon)

This section will later include:
- Endpoints (e.g., `/api/users`, `/api/videos`)
- Example requests and responses
- Authentication details

---

## 🧑‍💻 Author

**Khaula Arbab**  
Learning Full Stack Development | Self-taught | Aspiring Full Stack Developer  
GitHub: [your-username](https://github.com/your-username)

---

## 💬 Acknowledgements

- **Chai aur Code** YouTube channel for backend learning guidance ☕  
- **Teacher & Classmates** for collaboration and discussions  
- **OpenAI ChatGPT** for learning support and project guidance 💫  

---

## 🪪 License

This project is created for **learning and educational purposes**.  
Feel free to fork, clone, and experiment with it — just give credit where due 💛
