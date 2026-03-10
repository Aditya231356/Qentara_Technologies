# Qentara Technologies Website

A premium software agency website built with Next.js, React, and Tailwind CSS.

## 🚀 Deployment to Netlify

### Step 1: Generate Gmail App Password

Before deploying, you need to generate an App Password for Gmail:

1. Go to your Google Account (https://myaccount.google.com)
2. Click on **Security** in the left sidebar
3. Under "How you sign in to Google", enable **2-Step Verification** (if not already enabled)
4. After enabling 2-Step Verification, go to **App passwords**
   - Note: You may need to search for "App passwords" in the search bar
5. Create a new app password:
   - App name: `Qentara Technologies`
   - Select device: `Other (Custom name)` → enter `Qentara`
6. Copy the 16-character password (format: `xxxx xxxx xxxx xxxx`)

**Important:** The App Password is different from your regular Gmail password!

### Step 2: Deploy to Netlify

#### Option A: Deploy via Git (Recommended)

1. Push your code to GitHub
2. Go to https://app.netlify.com
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. In "Site settings", expand "Environment variables"
6. Click "Add new variable":
   - Key: `SMTP_PASS`
   - Value: Paste your Gmail App Password (without spaces)
7. Click "Deploy site"

#### Option B: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Link to your site
netlify link

# Set environment variable
netlify env:set SMTP_PASS your_app_password_here

# Deploy
netlify deploy --prod
```

### Step 3: Verify Environment Variables

After deployment, verify your environment variable is set:

1. Go to Netlify Dashboard → Your Site → Site Settings
2. Click on "Environment Variables"
3. Ensure `SMTP_PASS` is listed with your App Password value

### Step 4: Test the Contact Form

1. Visit your deployed website
2. Fill out the contact form
3. Submit and check if you receive the email

## ⚠️ Troubleshooting

### "Failed to send email" Error

If you see this error after deployment:

1. **Check Environment Variable:**
   - Go to Netlify Dashboard → Site Settings → Environment Variables
   - Ensure `SMTP_PASS` is set correctly (16-character App Password)

2. **Verify App Password:**
   - Make sure you're using an App Password, not your regular Gmail password
   - App Password format: `abcd efgh ijkl mnop` (16 characters)

3. **Check Netlify Functions Logs:**
   - Go to Netlify Dashboard → Functions
   - Look at the logs for the contact or consultation function
   - Check for specific error messages

### Common Error Solutions

| Error | Solution |
|-------|----------|
| `Invalid login` | Check your App Password is correct |
| `Authentication failed` | Regenerate App Password in Google Account |
| `Too many login attempts` | Wait a few minutes and try again |
| `Function not found` | Ensure API routes are properly configured |

## 📧 Email Configuration

The website uses Nodemailer with Gmail SMTP:

- **SMTP Host:** `smtp.gmail.com`
- **SMTP Port:** `587`
- **SMTP User:** `qentara.web@gmail.com`
- **SMTP Pass:** `[Your App Password]`

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
qentara-technologies/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── contact/       # Contact form API
│   │   │   └── consultation/ # Consultation form API
│   │   └── page.tsx           # Main page
│   └── components/            # React components
├── public/                    # Static assets
├── .env.local                 # Local environment (not committed)
├── netlify.toml               # Netlify configuration
└── package.json
```

## 🔧 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `SMTP_PASS` | Yes | Gmail App Password for sending emails |

---

**Note:** Never commit your `.env.local` file or expose your App Password in code!

