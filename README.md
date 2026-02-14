# KFD Express - Food Ordering Website

**The Genuine Taste from China** — A food ordering website for KFD Express restaurant in Bangladesh (Banani & Uttara branches).

## Project Structure

```
├── frontend/     # React + Vite
├── backend/      # Node.js + Express
└── README.md
```

## Local Development

### Backend
```bash
cd backend
npm install
npm run dev
```
Runs on http://localhost:4000

### Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs on http://localhost:5173

Create `frontend/.env` with:
```
VITE_API_URL=http://localhost:4000
```

## API Endpoints

- `GET /api/food` - List all food items
- `POST /api/order` - Place order (body: items, customerName, phone, address, branch, deliveryMethod)

## Deploying Live

### Frontend (Vercel)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import your repo
3. Set root directory to `frontend`
4. Add env: `VITE_API_URL` = your backend URL
5. Deploy

### Backend (Render)
1. Go to [render.com](https://render.com) → New Web Service
2. Connect your repo
3. Root directory: `backend`
4. Build: `npm install`
5. Start: `npm start`
6. Add env: `MONGODB_URI` (optional - for persistent orders)

After deploying backend, update `VITE_API_URL` in Vercel to your Render URL.

## MongoDB (Optional)

For persistent order storage, create a free cluster at [MongoDB Atlas](https://mongodb.com/atlas) and set `MONGODB_URI` in your backend env. Without it, orders use in-memory storage (resets on restart).
