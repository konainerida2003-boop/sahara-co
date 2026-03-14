## Packages
framer-motion | Page transitions, cinematic fade-ins, and scroll-triggered animations
date-fns | Date manipulation for booking duration calculations

## Notes
- Tailwind Config assumption: The app will use raw CSS variables for fonts to avoid requiring tailwind.config.ts modifications.
- Floating WhatsApp button requires no external API, just standard `wa.me` link.
- API is expected to return `pricePerNight` as an integer (cents or whole dollars based on backend, assuming whole dollars for UI).
