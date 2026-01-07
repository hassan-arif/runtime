<p align="center">
  <img src="public/icons/icon.png" alt="Runtime Logo" width="120px"/>
  <h1 align="center">Runtime</h1>
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/hassan-arif/runtime?style=social" />
  <img src="https://img.shields.io/badge/Stack-Next.js%2016-black" />
  <img src="https://img.shields.io/badge/Database-MongoDB-green" />
  <img src="https://img.shields.io/badge/Images-Cloudinary-blue" />
  <img src="https://img.shields.io/badge/Analytics-Posthog-orange" />
  <img src="https://img.shields.io/badge/Styles-Tailwind%20CSS-blueviolet" />
</p>

Runtime is an event management platform built with Next.js 16, TypeScript, and MongoDB for managing and discovering tech events.

## Demo

<p align="center">
  <img src="docs/demo.gif" alt="Runtime Demo" width="100%"/>
</p>

> [!NOTE]
> Check out the live version at [runtime-pi.vercel.app](https://runtime-pi.vercel.app/)

## Features

- **Event Discovery**: View featured and upcoming events fetched from the database.
- **Event Details**: Dedicated page for agendas, tags, and organizer information.
- **Booking Flow**: Functionality for event booking.
- **Media Management**: Image hosting and processing via Cloudinary.
- **Analytics**: User interaction tracking with PostHog.
- **Visual Effects**: Responsive design featuring light ray animations.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Server Actions)
- **Database**: [MongoDB](https://www.mongodb.com/) / [Mongoose](https://mongoosejs.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Media**: [Cloudinary](https://cloudinary.com/)
- **Analytics**: [Posthog](https://posthog.com/)
- **Visuals**: OGL

## Technical Highlights

- **Effective Caching**: Uses Next.js 16 caching features for data fetching.
- **Database Strategy**: Implementation of a cached MongoDB connection to reduce overhead.
- **SEO & Routing**: Semantic HTML with dynamic metadata and slug-based routing.
- **API Routes**: API layer for event management with error handling.

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance
- Cloudinary & Posthog accounts

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hassan-arif/runtime.git
   cd runtime
   ```

2. **Configure Environment Variables:**
   Create a `.env` file in the root directory:

   ```env
   MONGODB_URI=your_mongodb_uri
   CLOUDINARY_URL=your_cloudinary_url
   NEXT_PUBLIC_POSTHOG_KEY=your_key
   NEXT_PUBLIC_POSTHOG_HOST=your_host
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

3. **Install and Run:**
   ```bash
   yarn install
   yarn dev
   ```

## Credits

Initial setup inspired by [JavaScript Mastery](https://youtu.be/I1V9YWqRIeI).
