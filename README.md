# ✦ Flashcard Studio

An AI-powered flashcard generator that helps you study smarter. Paste your notes or type any topic and get instant study cards powered by AI.

🌐 **Live Demo** → https://flashcard-app-rust-five.vercel.app

---

## 🚀 Features

- **AI Card Generation** — Paste notes or type a topic, get flashcards instantly using Groq AI (Llama 3.3)
- **Study Mode** — Flip cards one by one, mark as "Got it" or "Still learning", track progress
- **Browse Mode** — View all cards in a grid, search by keyword, flip to see answers
- **User Authentication** — Register and login with JWT-based auth
- **Persistent Storage** — Decks saved to MongoDB, accessible from any device
- **Beautiful UI** — Purple & blue glassmorphism design with smooth animations

---

## 🛠️ Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- React Router DOM

### Backend
- Node.js + Express
- MongoDB Atlas + Mongoose
- JWT Authentication
- bcryptjs

### AI
- Groq API (Llama 3.3-70b)

### Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## 📸 Pages

| Page | Description |
|---|---|
| Home | Landing page with CTA |
| Generate | Paste notes → AI generates cards |
| Study | Flip cards, track progress |
| Browse | Grid view, search, deck switcher |
| Login/Register | JWT auth |

---

## 🧑‍💻 Run Locally

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Groq API key

### Frontend
```bash
cd client
npm install
npm run dev
```

Create `client/.env`:  VITE_GROQ_API_KEY=your_groq_api_key
VITE_API_URL=http://localhost:5000

### Backend
```bash
cd server
npm install
npm run dev
```

Create `server/.env`:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

---

## 📁 Project Structure
flashcard-app/
├── client/                 # React frontend
│   └── src/
│       ├── pages/          # Home, Generate, Study, Browse, Login, Register
│       ├── components/     # Navbar
│       └── api/            # API helper functions
├── server/                 # Node.js backend
│   ├── routes/             # auth.js, decks.js
│   ├── models/             # User.js, Deck.js
│   └── middleware/         # auth.js
└── README.md

---

## 🌐 Deployment

- Frontend deployed on **Vercel** with automatic GitHub deployments
- Backend deployed on **Render** with environment variables configured
- MongoDB hosted on **MongoDB Atlas** (free tier)

---

## 📅 Built Day by Day

This project was built progressively over 10 days:

| Day | What was built |
|---|---|
| 1 | Project setup — React + Vite + Tailwind |
| 2 | AI card generation + Study page |
| 3 | Navbar + Browse page |
| 4 | Full UI redesign — purple/blue theme |
| 5 | Badges, spinner, 404 page |
| 6 | Backend — Node.js + Express |
| 7 | Login/Register + JWT auth |
| 8 | Deployed to Vercel + Render |
| 9 | Connected frontend to backend |
| 10 | Full flow tested and complete |

---

## 👨‍💻 Author

**Saksham Trivedi**
- GitHub: [@sakshamm1006](https://github.com/sakshamm1006)

---

⭐ Star this repo if you found it useful!


