# Shell Car Wash - Frontend Portal

A high-performance, offline-capable Single Page Application (PWA) built for **Shell Car Wash Management & Worker Commission System**.

Designed for seamless deployment on **Vercel**, with native mobile PWA support, worker cashout ledgers, executive dashboards, and instant backend synchronization.

---

## 🚀 One-Click Deployment to Vercel

1. **Import Repository to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your GitHub repository: `stevedev-ops/carwash_frontend`
2. **Project Settings**:
   - **Framework Preset**: `Other`
   - **Root Directory**: `./` (default)
   - **Build Command**: `echo 'Static PWA ready for Vercel deployment'` (default)
   - **Output Directory**: `.` (default)
3. **Click Deploy**:
   - Vercel will deploy the application in seconds!

---

## 🔗 Connecting to the Backend (Render)

The frontend can connect to your backend in two convenient ways:

### Option 1: Live In-App Server Config (Zero Re-deployments)
1. Open the deployed Vercel site.
2. On the **Sign In** screen, click **"Server Config"**.
3. Paste your Render backend URL (e.g. `https://carwash-backend.onrender.com`).
4. Click **Connect** — the app immediately links to your backend and stores the URL locally!

### Option 2: Vercel Reverse Proxy Rewrites (`vercel.json`)
You can also update `vercel.json` in this repo to automatically proxy `/api` calls directly to your Render instance:
```json
{
  "version": 2,
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "https://<YOUR-RENDER-BACKEND>.onrender.com/api/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 💻 Local Development

To run the frontend locally:
```bash
# Serve static files locally on port 5173
npx serve . -l 5173
```
Or with Python:
```bash
python -m http.server 5173
```

---

## 📱 Progressive Web App (PWA) Installation

- On Android / Chrome: Click the three dots menu -> **Install application** or **Add to Home screen**.
- On iOS / Safari: Tap Share -> **Add to Home Screen**.
- Offline queueing and caching are handled by the built-in Service Worker (`sw.js`).

