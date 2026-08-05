# Sabbir Ahmmed — Developer Portfolio

A personal developer portfolio built with plain HTML/CSS/JS on the front end
and a small Express server on the back end.

## Tech Stack
- HTML5, CSS3, JavaScript
- Node.js + Express (server)
- Java, MySQL, Postman (used in the featured projects)

## Project Structure
```
portfolio/
├── public/
│   ├── index.html      # Main page
│   ├── style.css        # All styling
│   ├── script.js        # Mobile nav toggle + interactivity
│   └── assets/
│       ├── images/      # Project screenshots, profile photo, etc.
│       └── icons/       # Icons/logos
├── server.js             # Express server
├── package.json
├── .gitignore
└── README.md
```

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Run the server:
   ```
   npm start
   ```

3. Open in browser:
   ```
   http://localhost:3000
   ```

## Projects Featured
- **Food Delivery App** — Java, Node.js, MySQL, Postman
- **Online Medical System** — Java, HTML/CSS, MySQL
- **Online Booking System** — Node.js, MySQL, JavaScript (in progress)

## To Do
- [ ] Add real screenshots to `public/assets/images/`
- [ ] Replace placeholder GitHub/live demo links for each project
- [ ] Add real email, GitHub, and LinkedIn links in the Contact section
- [ ] Deploy (Render / Railway recommended for Express apps)

## Deployment
This project uses a Node.js server, so it needs a Node-friendly host:
- **Render** (free tier, easy GitHub integration)
- **Railway** (free tier, simple deploys)

GitHub Pages will **not** work here since it only serves static files, not a
running Node process.
