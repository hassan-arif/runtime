<p align="center">
  <img src="public/icons/icon.png" alt="Runtime Logo" width="200px"/>
  <h1>Runtime</h1>
</p>

Runtime is an Event Management Platform built with Next.js, TypeScript, MongoDB, and Cloudinary.

# Development Highlights

- Create homepage UI. Add light rays, hero section, and featured events (using mock data).
- Integrate Posthog for analytics (track bookings and user interactions) and MongoDB for data storage.
- Designed the data model from real-world behavior first, then implemented it cleanly with MongoDB, Mongoose, and TypeScript. Set up a cached database connection that survives Next.js server lifecycles instead of reconnecting like an amateur.
- Built production-grade API routes for creating, fetching, and querying events by slug, including validation and error handling.
- Integrated Cloudinary to handle real file uploads instead of pretending URLs are uploads.
- Consumed those APIs from server components, using environment-aware base URLs and dynamic routing to render event lists and details.
- Implemented event details page with dynamic data fetching from an API, including tags, agenda, and organizer info, along with a booking form.
- Introduced Server actions to fetch similar events efficiently without API boilerplate.
- Enabled Caching via Next.js 16’s use cache and cache tag features to speed up runtime data fetching and control stale data.

# Tech Stack

- Next.js 16
- Tailwind CSS
- React Bits -> Light Rays
- Posthog
- MongoDB
- Cloudinary -> Image Upload

## Getting Started

First, run the development server:

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Credits

Initial setup inspired by [JavaScript Mastery](https://youtu.be/I1V9YWqRIeI?si=X72XAb32_M1h0jpR).
