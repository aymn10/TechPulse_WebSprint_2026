# TechPulse — Global Tech Events

A complete client-side Tech Event Management Portal built for the CodeForge WebSprint 2026 brief.

## Run

No build step is required.

1. Extract the folder.
2. Open `index.html` in a modern browser.
3. For the smoothest experience, use VS Code Live Server, although the app is designed to work as a static site.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- localStorage
- Inline SVG icons
- CSS/SVG-style animated visual system

No backend, database, framework or authentication server is required.

## Key differentiator

TechPulse connects event discovery with a student's activity, skills, interests and schedule. The analytics dashboard uses the same local activity history that powers registrations, saves, connections and recommendations.

## Main features

- TechPulse home page matching the supplied visual direction
- Blue/orange flowing hero background
- Orbit-style popular event animation
- Cards travel along an elliptical path with gentle pauses
- Click an event to trigger a circular zoom transition into its event page
- Event status is calculated dynamically from dates
- Event search and combined filters
- Profile-autofilled registration
- Gender eligibility validation
- Save events
- My Events
- Monthly calendar showing all public events and registered events
- My Rounds
- Certificates with print flow
- Find My People and skill matching
- Previous editions
- Organizer LinkedIn links
- Activity history
- Activity score and estimated percentile
- Participation rate
- Activity heatmap
- Most active days
- Schedule-based recommendations
- "Why this event?" matching logic
- Skill and category analytics
- Notifications
- Dark mode
- Corporate event creation
- Corporate-created events are added to Discover
- Responsive mobile navigation
- Empty states and accessible controls
- LocalStorage persistence

## Data model

The demo contains:

- 12+ events
- recurring event editions
- rounds
- certificates
- 10 teammate profiles
- notifications
- seeded activity history
- a default TechPulse student profile

The seeded analytics are clearly described as demo/sample data.

## Important implementation note

Because this is a static frontend, the site does not claim to have real platform-wide users or a real backend. The percentile is explicitly estimated against simulated/demo activity, and corporate events are persisted locally.

## Deployment

The project can be deployed as a static site to:
- Vercel


Upload the four project files and serve `index.html`.

## Suggested presentation

For the competition demo:

1. Start on the home page.
2. Let the event cards move along the orbit.
3. Click a card and show the smooth zoom transition.
4. Register for an event — fields autofill from the profile.
5. Open My Calendar and click a date to show all events that day.
6. Open My Analytics and show activity, score, percentile and active days.
7. Open Find My People for the same event.
8. Open For Corporates and publish a demo event.
9. Return to Discover and show the new event.


## Visual refresh
The GUI uses a constellation-heartbeat TechPulse logo and a dark geometric starfield/orange-light homepage aesthetic inspired by the provided references. Feature logic is unchanged.
