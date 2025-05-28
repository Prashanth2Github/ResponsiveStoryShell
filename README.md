# Responsive Story Shell 🖋️

Responsive Story Shell is a fullstack web application designed for creative communities to share and discover impactful stories. The project blends modern design with expressive storytelling aesthetics, offering a clean UI and robust backend using the MERN stack (MongoDB, Express, React, Node.js).

This project is inspired by the visual language of storybooks, featuring rich typography, themed colors, and elegant layout patterns.

---

## 🚀 Live Demo & Source Code

- 🔗 **[Live Demo on Render](https://responsivestoryshell.onrender.com/)**
- 🔗 **[GitHub Repository](https://github.com/Prashanth2Github/ResponsiveStoryShell)**


---

## ✨ Features

1. 🧭 Responsive UI shell with navigation (`Home`, `Genres`, `Submit`)
2. 🎨 CSS Variables used for flexible theming
3. 🔐 Session-based user authentication (MongoDB + express-session)
4. ⚡ Vite-powered fast React frontend
5. 📦 Backend bundled using esbuild for deployment
6. 📚 Fade-in story cards, decorative accents, and ribbon icons

---

## 🛠️ Tech Stack

### Frontend

- **React** + **TypeScript**
- **Vite** for bundling and dev server
- **Tailwind CSS** with custom variables
- Fonts: *Playfair Display* (Headlines), *Source Sans Pro* (Body)

### Backend

- **Node.js** + **Express**
- **MongoDB** with **Mongoose**
- **express-session** with **connect-mongo** for persistent sessions

### Deployment

- **Render** for fullstack deployment (frontend + backend)

---

## 🎨 Brand & UI Guidelines

| Element       | Design                                         |
|---------------|------------------------------------------------|
| **Mood**      | Modern Storybook, Magical, Editorial           |
| **Colors**    | Violet `#8E24AA` • Amber `#FFB300` • Off-White `#FAFAFA` |
| **Typography**| Headlines: *Playfair Display* • Body: *Merriweather* or *Source Sans Pro* |
| **UI Elements** | Drop caps, bookmarks, fade-ins, paper textures |

---

## 🚀 Getting Started Locally

### 1. Clone the repo

```bash
git clone https://github.com/Prashanth2Github/ResponsiveStoryShell.git
cd ResponsiveStoryShell
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### 4. Run in development

```bash
npm run dev
```

This will:
- Serve the frontend via Vite on port `5173`
- Start the Express backend on port `5000`

### 5. Build for production

```bash
npm run build
```

- Frontend build output: `dist/public`
- Backend bundle: `dist/index.js`

---

## 📁 Project Structure

```
ResponsiveStoryShell/
├── src/                   # Frontend source code
│   ├── components/        # Header, footer, etc.
│   ├── pages/             # Home, Genres, Submit
│   └── App.tsx            # Main app
├── server/                # Express backend
│   ├── index.ts           # Entry point
│   ├── routes.ts          # API routes
│   ├── models/            # Mongoose schemas
│   └── storage.ts         # MongoDB data access
├── public/                # Static assets
├── dist/                  # Production build output
├── .env                   # Environment config
├── vite.config.ts         # Vite config
└── tsconfig.json          # TypeScript settings
```

---

## 🔐 MongoDB & Sessions

- MongoDB URI is read from `.env`
- Sessions are stored using `connect-mongo`
- Session-based user authentication for creating and viewing stories

---

## 🧾 Deployment Notes (Render)

### Render Build Settings

- **Build Command:**
  ```bash
  npm install --include=dev && npm run build
  ```

- **Start Command:**
  ```bash
  node dist/index.js
  ```

- **Static Files:** Served from `dist/public`


## 👨‍💻 Author

**Prashanth Bonkuru**  
## 📬 Contact

- 📧 Email: bonkuruprashanth@gmail.com  
- 🔗 [LinkedIn](https://www.linkedin.com/in/prashanth-bonkuru-7a8617265/)  
🌐 [GitHub](https://github.com/Prashanth2Github)


---

## 📄 License

Licensed under the [MIT License](LICENSE).
