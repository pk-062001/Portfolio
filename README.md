# Prathamesh Kokkula Portfolio

Production-ready React portfolio built with Vite, Tailwind CSS, Framer Motion, and EmailJS. The contact form sends email from the deployed Vercel frontend without a backend server.

## Project Structure

```text
project/
  client/        React frontend
  server/        Legacy Express backend, no longer required for contact form email
  package.json   Root scripts
```

## Local Setup

```bash
npm install
npm install --prefix client
npm run dev --prefix client
```

The frontend runs at `http://localhost:5173`.

## EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/).
2. Open the EmailJS dashboard and go to **Email Services**.
3. Click **Add New Service** and choose **Gmail**.
4. Connect the Gmail account that should send the email.
5. Copy the generated **Service ID**.
6. Go to **Email Templates** and click **Create New Template**.
7. Use this template content:

```text
Subject: {{subject}}

New portfolio message for {{to_email}}

From: {{from_name}}
Email: {{from_email}}
Submitted: {{submitted_at}}

Message:
{{message}}
```

8. In the template settings, set **To Email** to `kprathamesh2001@gmail.com`.
9. Set **Reply To** to `{{reply_to}}` so replying goes to the visitor.
10. Save the template and copy the **Template ID**.
11. Go to **Account** > **General** and copy your **Public Key**.

## Environment Variables

Create `client/.env.local` for local development:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_TO_EMAIL=kprathamesh2001@gmail.com
```

Only `VITE_` variables are exposed to the Vite frontend. Do not put Gmail passwords or private keys in the frontend.

## Vercel Deployment

1. Open your Vercel project dashboard.
2. Go to **Settings** > **Environment Variables**.
3. Add these variables for Production, Preview, and Development:

```env
VITE_EMAILJS_SERVICE_ID
VITE_EMAILJS_TEMPLATE_ID
VITE_EMAILJS_PUBLIC_KEY
VITE_CONTACT_TO_EMAIL
```

4. Set `VITE_CONTACT_TO_EMAIL` to `kprathamesh2001@gmail.com`.
5. Redeploy the site after saving the variables.
6. Test the live contact form with a real name, email, subject, and message.

## Contact Form Behavior

- Validates name, email, subject, and message.
- Shows inline loading, success, and error states.
- Uses `@emailjs/browser` directly from React.
- Clears the form after a successful send.
- Falls back to a direct-email message if EmailJS env vars are missing.

## Build

```bash
npm run build --prefix client
```
