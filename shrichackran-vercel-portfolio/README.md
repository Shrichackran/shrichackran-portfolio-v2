# Shrichackran K M Portfolio

A responsive React + Vite portfolio built for Vercel deployment. It includes:

- Dark AI-themed landing page
- About, skills, experience, projects, services and contact sections
- Project GitHub buttons linked to the correct repositories
- Project assets modal/gallery
- Resume download
- EmailJS contact form integration

## 1. Install

```bash
npm install
```

## 2. Configure EmailJS

Create a `.env.local` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_ktcd4zp
VITE_EMAILJS_TEMPLATE_ID=template_yh79qbj
VITE_EMAILJS_PUBLIC_KEY=x2P2JRv4AFlRKMJ8i
```

The form sends these template variables:

- `name`
- `email`
- `from_name`
- `from_email`
- `reply_to`
- `subject`
- `title`
- `message`

Make sure your EmailJS template supports these variables.

## 3. Run locally

```bash
npm run dev
```

## 4. Add project output assets

Put images here:

```text
public/project-assets/speech/
public/project-assets/lifelink/
public/project-assets/jobbzz/
public/project-assets/wifi/
```

Then open `src/data/portfolioData.js` and add assets like this:

```js
assets: [
  { src: '/project-assets/speech/output-1.png', caption: 'Denoised audio waveform' },
  { src: '/project-assets/speech/output-2.png', caption: 'Speech recognition output' }
]
```

## 5. Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repository in Vercel.
3. Set build command: `npm run build`.
4. Set output directory: `dist`.
5. Add the same EmailJS variables in Vercel Project Settings → Environment Variables.
6. Deploy.
