# 🌐 TechPulse — Tech Event Management Portal

**CodeForge WebSprint 2026 Submission**

TechPulse is a fully client-side web application that helps students discover, register for, and track technical events — while connecting that activity to their own skills, interests, and schedule through a personal analytics dashboard.

Built entirely with **HTML, CSS, and vanilla JavaScript**. No backend, framework, or server required.

---

## ✨ Key Differentiator

Most event portals stop at "browse and register." TechPulse goes further: the same local activity history that powers registrations, saved events, and connections also drives a **personal analytics dashboard** — activity score, estimated percentile, participation rate, and schedule-based recommendations — so the platform feels alive and personalized, not just a static listing.

---

## 🚀 How to Run

No build step, no installation, no dependencies.

1. **Extract** the project folder (or clone the repo).
2. **Open `index.html`** directly in any modern browser — that's it, the app runs.
   - *Optional:* for the smoothest experience (correct relative paths, live reload), serve it with VS Code's **Live Server** extension or any static file server.
3. All data (profile, registrations, saved events, activity) is stored in the browser's **localStorage** — no sign-up or internet connection needed after the page loads.

---

## ✅ Core Features (mapped to brief requirements)

| Brief Requirement | What TechPulse Delivers |
|---|---|
| **Home Page** | Hero section with a blue/orange flowing animated background, event highlights, and a clear CTA — plus an orbit-style animation where popular event cards travel along an elliptical path with gentle pauses |
| **Event Listing** | 12+ seeded events (well above the 6 minimum), each with name, date, category, description, dynamic status (upcoming/live/closed calculated from real dates), and a Register button |
| **Search & Filter** | Global search by event name plus combined category filters, with a dedicated search overlay and recent-search history |
| **Registration Form** | Profile-autofilled fields (name, email, college, event selection), with validation including gender-eligibility checks where applicable |
| **Responsive Design** | Fully responsive layout across mobile, tablet, and desktop, including a dedicated mobile navigation menu |

## 🎁 Bonus Features

- 🌙 **Dark Mode** — full theme toggle with persisted preference
- 💾 **Local Storage** — all user data (profile, registrations, saved events, activity) persists across sessions
- 🎬 **Animated UI** — orbiting event cards, circular zoom transition into event detail pages, smooth micro-interactions throughout
- ⭐ **Custom Features** (beyond the brief):
  - 📊 **Personal Analytics Dashboard** — activity score, estimated percentile, participation rate, activity heatmap, most active days
  - 🧠 **"Why this event?" Recommendations** — schedule- and skill-based event matching with explainable reasoning
  - 🤝 **Find My People** — skill-matching to connect with other participants for a given event
  - 📅 **My Calendar** — monthly view of all public + registered events, click any date to see that day's events
  - 🏆 **My Rounds & Certificates** — round tracking with a print-ready certificate flow
  - 🏢 **For Corporates** — organizations can create events, which flow straight into the public Discover feed
  - 🔔 **Notifications**, **Previous Editions**, **Organizer LinkedIn links**, and accessible empty states throughout

---

## 🧩 Data Model (Demo Data)

The app ships with realistic seeded data so every feature is demo-ready out of the box:

- 12+ events, including recurring event editions
- Rounds & certificates
- 10 teammate profiles
- Notifications
- Seeded activity history
- A default TechPulse student profile

> **Note on data:** This is a static frontend, so TechPulse does not claim to have real platform-wide users or a live backend. The activity percentile is explicitly **estimated against simulated/demo data**, and any events created via "For Corporates" are persisted locally in the browser — this is by design for a hackathon-scope submission, not a limitation the team was unaware of.

---

## 🛠️ Tech Stack

- HTML5
- CSS3 (custom orbit/zoom animation system, no external animation library)
- Vanilla JavaScript (no framework)
- localStorage for persistence
- Inline SVG icons and custom TechPulse branding assets

---

## 🎥 Suggested Demo Flow

1. Land on the **Home** page and let the event cards move along the orbit.
2. Click a card to trigger the **circular zoom transition** into its event page.
3. **Register** for an event — watch the fields autofill from the profile.
4. Open **My Calendar** and click a date to see all events on that day.
5. Open **My Analytics** to show activity score, percentile, and most active days.
6. Open **Find My People** for the same event to show skill matching.
7. Open **For Corporates** and publish a demo event.
8. Return to **Discover** and show the new event live in the feed.

---

## 🚢 Deployment

Deployed as a static site on **Vercel**.

🔗 **Live Demo:** _[add your Vercel deployment link here]_

To deploy your own copy: push this repo to GitHub, import it into Vercel, and deploy — no build command or environment variables needed since it's a static site.

---

## 🎨 Visual Identity

TechPulse features a custom **constellation-heartbeat logo** and a dark geometric starfield with orange-light accents, giving the portal a distinct, memorable identity beyond a generic event-listing template.
