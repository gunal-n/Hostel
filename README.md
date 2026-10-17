# Nikilan Men's Hostel — Frontend starter

## Run locally
1. Extract this ZIP.
2. Open `index.html` in a browser. An internet connection is needed for Tailwind CDN and Google Fonts.
3. Replace the placeholder details before publishing.

## Where to edit
- `index.html`: text, room types, facilities, image placeholders, map area.
- `styles.css`: colors, layout, responsiveness and animation.
- `script.js`: phone/WhatsApp number, Google Maps URL, intro animation and room enquiry interactions.

## Replace placeholders with your photos
Each media placeholder is already responsive and maintains the layout at phone, tablet, laptop and desktop sizes. To add a photo, replace the relevant `<div class="media-placeholder">...</div>` with e.g.
`<img src="assets/images/room-4-sharing.jpg" alt="Four sharing room" class="media-fill">`
and add this to `styles.css`:
`.media-fill { width:100%; height:100%; object-fit:cover; display:block; }`
Use `object-fit: cover` to fill the card without stretching. Keep source images at their original proportions; the browser crops as needed.

Suggested photo sizes:
- Hero image/video: 1920×1080 (16:9 landscape)
- Room cards: 1200×900 (4:3 landscape)
- About photo: 1200×1400 (portrait)
- Gallery images: 1000–1600px wide
These are recommendations, not strict upload limits.

## Add a video later
Uncomment the `<video>` element inside `#home .hero-media` and place your MP4 at `assets/videos/hostel-tour.mp4`. Keep it muted and use `playsinline` for mobile autoplay support.

## Important before publishing
- Replace phone/WhatsApp number in `script.js`.
- Replace address and `mapsUrl` with your actual hostel location and Google Maps link/embed.
- Replace `ADD PRICE` and the room availability labels with verified information.
- Remove facilities that your hostel does not actually provide.
- Tailwind CDN is convenient for a prototype; for a production deployment, install Tailwind using its CLI/build process.
