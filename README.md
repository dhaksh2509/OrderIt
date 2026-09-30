# 🍔 OrderIT - Full Stack Food Delivery & Restaurant Platform

OrderIT is a modern, full-stack food ordering and restaurant management web application. Built with **Node.js/Express** on the backend and **React (Vite) + Redux Toolkit** on the frontend, it offers a seamless experience for browsing restaurants, filtering food items, managing carts, placing orders via Stripe, and handling user authentication with email notifications.

---

## 🚀 Features

- 🏪 **Restaurant Directory & Search**: Search for restaurants by keyword and filter by ratings, reviews, or Pure Veg options.
- 🍕 **Interactive Menus**: Detailed menu categories and food item listings with dynamic availability.
- 🛒 **Cart & Order Management**: Add, update, and remove items with real-time state synchronization via Redux.
- 🔐 **User Authentication & Roles**: Secure JWT-based authentication with role-based access control (Customer / Admin).
- 📧 **Automated Email Notifications**: Password reset and welcome emails powered by Pug templates and Nodemailer.
- 💳 **Stripe Payment Gateway**: Secure online checkout processing.
- ☁️ **Media Storage**: Cloudinary integration for restaurant and menu image uploads.

---

## 🛠️ Tech Stack

### **Backend (`/backend`)**
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: JSON Web Tokens (JWT) & Cookie Parser
- **Template Engine**: Pug (Email Templates)
- **Emails**: Nodemailer & html-to-text
- **Payment & Cloud**: Stripe API & Cloudinary

### **Frontend (`/frontend`)**
- **Framework**: React 18 with Vite
- **State Management**: Redux Toolkit & React-Redux
- **Routing**: React Router v6
- **HTTP Client**: Axios with centralized API config
- **Styling & UI**: Custom CSS, Bootstrap & React Toastify

---

## 📁 Project Structure

```
OrderIT/
├── backend/
│   ├── config/             # Database connection, Cloudinary, and environment configs
│   ├── controllers/        # Express request handlers (Auth, Cart, FoodItems, Menus, Orders, Restaurants)
│   ├── middlewares/        # Error handling, async catchers, and role authorization
│   ├── models/             # Mongoose schemas (User, Restaurant, Menu, FoodItem, Cart, Order)
│   ├── routes/             # RESTful API route definitions
│   ├── utils/              # APIFeatures, Nodemailer Email helper, JWT tokens, Seeder script
│   ├── views/              # Pug HTML email templates
│   ├── app.js              # Express app initialization
│   └── server.js           # Server startup script
│
├── frontend/
│   ├── public/             # Static images and icons
│   ├── src/
│   │   ├── assets/         # App graphics & SVGs
│   │   ├── Components/     # React UI components & Layouts (Header, Footer, Menu, Restaurant, etc.)
│   │   ├── redux/          # Redux slices, store setup & async action creators
│   │   ├── utils/          # Centralized Axios instance configuration
│   │   ├── App.jsx         # App router configuration
│   │   └── main.jsx        # App entry point
│   ├── index.html          # HTML entry
│   └── vite.config.js      # Vite build & proxy settings
│
└── .gitignore              # Unified monorepo ignore configuration
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** (v18+ recommended)
- **MongoDB** (Local instance or MongoDB Atlas URI)
- **NPM** or **Yarn**

---

### 1. Clone the Repository

```bash
git clone https://github.com/dhaksh2509/OrderIt.git
cd OrderIt
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `config.env` file inside `backend/config/` using the provided template:

```bash
cp config/config.env.example config/config.env
```

Fill in your actual environment credentials in `backend/config/config.env`:

```env
PORT=8080
NODE_ENV=DEVELOPMENT
DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES=90d
JWT_EXPIRES_TIME=90
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
FRONTEND_URL="http://localhost:5173/"
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_API_KEY=your_stripe_api_key
```

Run database seeder (Optional):
```bash
node utils/seeder.js
```

Start the backend server:
```bash
npm start
```
> Server runs on `http://localhost:8080`

---

### 3. Frontend Setup

In a new terminal window:

```bash
cd frontend
npm install
```

Create `.env` in `frontend/`:
```env
# Optional environment overrides
```

Start the Vite development server:
```bash
npm run dev
```
> Application runs on `http://localhost:5173`

---

## 📡 Key API Routes Summary

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/v1/eats/stores` | Fetch all restaurants (with search & filter query params) |
| `GET` | `/api/v1/eats/stores/:storeId` | Fetch single restaurant details |
| `GET` | `/api/v1/eats/stores/:storeId/menus` | Fetch menus for a specific restaurant |
| `POST` | `/api/v1/users/signup` | Register a new user |
| `POST` | `/api/v1/users/login` | Authenticate user & issue JWT |
| `POST` | `/api/v1/eats/cart/add-to-cart` | Add item to user shopping cart |
| `POST` | `/api/v1/eats/orders/new` | Place a new order |

---

## 📝 License

This project is open source under the [MIT License](LICENSE).
