# MERN Full Stack Job Portal

## Description

This project is a full-stack job portal application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to search for jobs, apply for jobs, and manage their profiles. The application also includes an admin dashboard for managing job listings and users.

## Project Structure

```
mern-full-stack-jobportal/
client/
├── README.md 
├── .gitignore
├── .env                  # Environment variables (Redis/MongoDB URLs)
├── package.json          # Dependencies (e.g., prisma, argon2, redis)
└── tsconfig.json         # TypeScript config
├── public/
│   └── assets/
│       ├── logo.svg
│       └── hero-image.png
│
└── src/
    ├── @types/
    │   ├── job.d.ts
    │   ├── auth.d.ts
    │   ├── user.d.ts
    │   ├── notification.d.ts    # ✅ New: Notification types
    │   └── admin.d.ts           # ✅ New: Admin dashboard types
    │
    ├── api/
    │   ├── axios.ts
    │   ├── auth.api.ts
    │   ├── jobs.api.ts
    │   ├── user.api.ts
    │   └── notifications.api.ts # ✅ New: Notifications API (subscribe, fetch)
    │
    ├── assets/
    │   ├── icons/
    │   │   ├── search.svg
    │   │   ├── user.svg
    │   │   └── notification.svg # ✅ Optional: icon for notification bell
    │   └── images/
    │       ├── no-jobs.png
    │       └── banner.jpg
    │
    ├── components/
    │   ├── common/
    │   │   ├── Button.tsx
    │   │   ├── Input.tsx
    │   │   ├── Modal.tsx
    │   │   ├── Spinner.tsx
    │   │   └── ThemeToggle.tsx   # ✅ New: Dark Mode Toggle Button
    │   │
    │   ├── layout/
    │   │   ├── Header/
    │   │   │   ├── NavAuth.tsx
    │   │   │   └── index.tsx
    │   │   ├── Footer/
    │   │   │   └── index.tsx
    │   │   └── Sidebar/          # ✅ (Optional: For Admin Panel)
    │   │       └── index.tsx
    │   │
    │   ├── job/
    │   │   ├── JobCard.tsx
    │   │   ├── JobList.tsx
    │   │   └── JobFilter.tsx
    │   │
    │   ├── user/
    │   │   ├── ProfileCard.tsx
    │   │   └── SettingsForm.tsx
    │   │
    │   └── notifications/
    │       ├── NotificationItem.tsx
    │       └── NotificationList.tsx
    │
    ├── context/
    │   ├── AuthContext.tsx
    │   ├── ThemeContext.tsx        # ✅ New: Light/Dark Theme Provider
    │   └── NotificationContext.tsx # ✅ New: Real-time Notifications Context
    │
    ├── hooks/
    │   ├── useAuth.ts
    │   ├── useJobs.ts
    │   ├── useNotifications.ts     # ✅ New: Subscribe & listen to notifications
    │   └── useTheme.ts             # ✅ Dark Mode hook
    │
    ├── pages/
    │   ├── index.tsx               # Home Page
    │   ├── auth/
    │   │   ├── login.tsx
    │   │   ├── register.tsx
    │   ├── jobs/
    │   │   ├── index.tsx           # Job Listings
    │   │   └── [id].tsx            # Single Job Page
    │   ├── profile/
    │   │   └── index.tsx           # User Profile
    │   ├── admin/                  # ✅ New: Admin Dashboard
    │   │   ├── index.tsx
    │   │   ├── users.tsx
    │   │   └── jobs.tsx
    │   └── notifications/
    │       └── index.tsx           # Notifications Page
    │
    ├── styles/
    │   ├── globals.css
    │   ├── dark.css                # ✅ New: Dark Mode Specific Styles
    │   └── tailwind.config.ts
    │
    ├── utils/
    │   ├── authHelpers.ts
    │   ├── jobHelpers.ts
    │   ├── notificationHelpers.ts
    │   └── themeHelpers.ts         # ✅ Theme detection helpers
    │
    ├── middleware/
    │   └── authMiddleware.ts       # (optional) Protect admin pages
    │
    └── config/
        ├── env.ts                  # Environment variables
        └── apiRoutes.ts             # API route constants
server/
├── src/
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── jobController.ts
│   │   ├── userController.ts
│   │   └── notificationController.ts  # Publish/subscribe notifications
│   ├── middlewares/
│   │   ├── authMiddleware.ts
│   │   └── errorHandler.ts
│   ├── models/
│   │   └── prisma/                  # Prisma ORM
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── jobRoutes.ts
│   │   ├── userRoutes.ts
│   │   └── notificationRoutes.ts
│   ├── services/
│   │   ├── redisClient.ts           # Redis Pub/Sub connection
│   │   └── notificationService.ts   # Redis event publishers
│   ├── sockets/
│   │   └── notificationSocket.ts    # Real-time notifications via WebSocket
│   ├── app.ts
│   └── server.ts
├── prisma/
│   ├── schema.prisma                 # Prisma schema
│   └── seed.ts
└── package.json
README.md # Documentation
.env
.gitignore
tsconfig.json
```
