# Contact Form Setup Guide

Your contact form is now configured to send emails directly to your inbox using Web3Forms!

## Quick Setup (2 minutes):

### Step 1: Get Your Free Access Key

1. Visit: **https://web3forms.com/**
2. Enter your email address (where you want to receive messages): `sudhirjigta@gmail.com`
3. Click "Create Access Key"
4. Check your email and verify your email address
5. Copy the Access Key they provide

### Step 2: Add Access Key to Your Website

1. Open `index.html`
2. Find line with: `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">`
3. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key
4. Save the file

**Example:**
```html
<input type="hidden" name="access_key" value="abcd1234-5678-90ef-ghij-klmnopqrstuv">
```

### Step 3: Test It!

1. Open your website
2. Fill out the contact form
3. Click "SEND MESSAGE"
4. Check your email inbox for the message!

## Features Included:

✅ **Direct Email Delivery** - Messages sent straight to your inbox
✅ **Spam Protection** - Honeypot field to block bots
✅ **Loading State** - Button shows "SENDING..." while processing
✅ **Success/Error Messages** - Visual feedback for users
✅ **Form Validation** - All fields required before submission
✅ **Auto Form Reset** - Clears form after successful submission
✅ **Responsive Design** - Works on all devices

## Alternative: Using EmailJS (Optional)

If you prefer EmailJS instead:

1. Visit: https://www.emailjs.com/
2. Sign up for free account
3. Create email service and template
4. Get your Public Key, Service ID, and Template ID
5. Replace the Web3Forms code with EmailJS integration

## Troubleshooting:

**Problem:** Form not sending
- Solution: Make sure you replaced YOUR_ACCESS_KEY_HERE with actual key
- Check browser console (F12) for errors

**Problem:** Not receiving emails
- Solution: Check spam folder
- Verify email address on Web3Forms dashboard

**Problem:** "Network error" message
- Solution: Check internet connection
- Verify Web3Forms API is accessible

## Web3Forms Limits (Free Plan):

- ✅ 250 submissions per month (FREE)
- ✅ No credit card required
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File attachments (if needed)

Need more submissions? Upgrade to paid plan or use multiple access keys.

---

**Need Help?**
- Web3Forms Docs: https://docs.web3forms.com/
- EmailJS Docs: https://www.emailjs.com/docs/

Your contact form is ready to go! 🚀
