# ☕ Beans Paradise — Full-Stack Website

A complete MERN stack website for **Beans Paradise**, Ichalkaranji's beloved coffee stall (soon to be a full café)!

## 🌟 Pages & Features

| Page | What's Inside |
|------|---------------|
| **Home** | Hero section, signature items preview, vibe/events teaser, Instagram CTA, location |
| **Menu** | Full menu with search, category filter, veg toggle, price display |
| **Events** | Music nights, tattoo pop-ups, game nights, grand café opening |
| **About** | Brand story, values, milestone timeline |
| **Contact** | Contact form (connected to API), info cards, Instagram link |

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router v6, Framer Motion, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB + Mongoose
- **Fonts**: Playfair Display, DM Sans, Dancing Script (Google Fonts)

## 🚀 Setup & Run

### Prerequisites
- Node.js v16+
- MongoDB (local or MongoDB Atlas)

### 1. Install Dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 2. Configure Environment

Edit `server/.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/beans-paradise
CLIENT_URL=http://localhost:3000
```

For MongoDB Atlas, replace MONGO_URI with your Atlas connection string.

### 3. Run Development Servers

**Terminal 1 — Backend:**
```bash
cd server
npm run dev        # needs: npm install -g nodemon
# or
npm start
```

**Terminal 2 — Frontend:**
```bash
cd client
npm start
```

Open **http://localhost:3000** 🎉

### 4. (Optional) Seed Database

```bash
# Seed menu items
curl -X POST http://localhost:5000/api/menu/seed

# Seed events
curl -X POST http://localhost:5000/api/events/seed
```

## 📁 Project Structure

```
beans-paradise/
├── server/
│   ├── index.js              # Express app entry
│   ├── .env                  # Environment variables
│   ├── models/
│   │   ├── MenuItem.js       # Menu item schema
│   │   └── Event.js          # Event schema
│   └── routes/
│       ├── menu.js           # GET /api/menu
│       ├── events.js         # GET /api/events
│       └── contact.js        # POST /api/contact
│
└── client/
    └── src/
        ├── App.js            # Router setup
        ├── pages/
        │   ├── Home.js/css   # Landing page
        │   ├── Menu.js/css   # Menu page with filters
        │   ├── Events.js/css # Events page
        │   ├── About.js/css  # Story & timeline
        │   └── Contact.js/css# Contact form
        └── components/
            ├── Navbar.js/css # Sticky navbar
            └── Footer.js/css # Site footer
```

## 🎨 Design

- **Color Palette**: Deep espresso browns, warm caramel gold, cream backgrounds
- **Typography**: Playfair Display (headings) + DM Sans (body) + Dancing Script (accents)
- **Theme**: Warm, premium café aesthetic with floating animations and glass-morphism

## 🌍 Deployment (Production)

### Frontend (Vercel / Netlify)
```bash
cd client
npm run build
# Deploy the /build folder
```

### Backend (Railway / Render / Heroku)
```bash
# Set environment variables in your hosting platform:
MONGO_URI=<your-atlas-uri>
CLIENT_URL=<your-frontend-url>
NODE_ENV=production
```

## 📸 Instagram

Follow **[@beans__paradise](https://www.instagram.com/beans__paradise/)** on Instagram!

---
Made with ☕ for Beans Paradise, Ichalkaranji, Maharashtra 🇮🇳
