# Qentara Technologies Website

A premium software agency website built with Next.js, React, TypeScript, and Tailwind CSS.

## Vercel Deployment

### 1. Required Environment Variable

Set this variable in Vercel before testing the forms:

| Variable | Required | Description |
| --- | --- | --- |
| `SMTP_PASS` | Yes | Gmail App Password for `qentara.web@gmail.com` |

### 2. Generate a Gmail App Password

1. Open https://myaccount.google.com
2. Go to `Security`
3. Enable `2-Step Verification` if it is not already enabled
4. Open `App passwords`
5. Create a password for `Qentara Technologies`
6. Copy the 16-character app password and use it as `SMTP_PASS`

### 3. Deploy on Vercel

1. Push the repository to GitHub
2. Import the repository in https://vercel.com
3. In the project settings, add the `SMTP_PASS` environment variable
4. Deploy

### 4. Verify After Deployment

1. Open the deployed site
2. Submit the contact form
3. Submit the consultation form
4. Submit a pricing inquiry

If `SMTP_PASS` is missing or invalid, the API routes now return a clear configuration error instead of failing silently.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run start
```

## Notes

- This project is configured for Vercel as a standard Next.js app.
- API routes use the Node.js runtime so `nodemailer` works correctly in production.
- App metadata is handled through `src/app/layout.tsx`.
