# Deploy to Hostinger

## Before upload (on your PC)

```bash
node generate.mjs
```

Always run this first so all `.html` files match your latest changes.

## Upload to Hostinger

1. Log in to **hPanel** → **File Manager** → `public_html`
2. Upload **all** of these (overwrite existing files):
   - `index.html`, `about.html`, `services.html`, `contact.html`, `testimonials.html`
   - `.htaccess` (required for clean URLs)
   - `css/style.css`
   - `js/app.js`, `js/contact.js`, `js/dashboard.js`
   - `images/` — **entire folder**, including:
     - `profile-photo.png`, `profile-photo-about.png`
     - project covers (`beeswax-wrap-kit.png`, `eyebrow-stamp-kit.png`, etc.)
   - `projects/` — **entire folder** (all project `.html` files + `index.html`)
   - `images/projects/` — case study screenshots per project slug
3. Enable **SSL** (Let's Encrypt) in hPanel
4. Visit your domain

## If changes still look old

1. **Hard refresh:** `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Try **Incognito / private** window
3. Confirm you uploaded **overwritten** files (check file **Modified** date in Hostinger File Manager)
4. Confirm upload went to **`public_html`** root, not a subfolder
5. Clear **Hostinger cache** if enabled: hPanel → **Cache Manager** → Purge

CSS/JS now use `?v=` cache-busting — re-run `node generate.mjs` and re-upload HTML + css + js after each update.

## Clean URLs

The `.htaccess` file enables URLs **without** `.html`:

| Page | URL |
|------|-----|
| Home | `https://yourdomain.com/` |
| About | `https://yourdomain.com/about` |
| Services | `https://yourdomain.com/services` |
| Projects | `https://yourdomain.com/projects` |
| Contact | `https://yourdomain.com/contact` |
| Project detail | `https://yourdomain.com/projects/project-slug` |

If a page shows 404, confirm `.htaccess` was uploaded and **Apache mod_rewrite** is enabled (default on Hostinger).

## First contact form submission
FormSubmit will send an activation email to contactmuhammadharis22@gmail.com — click the link to activate.

## Local test
Use a local server with Apache, or `npx serve .` for basic preview (clean URLs need Apache; `serve` will still use `.html` paths unless you add a proxy).

For full URL testing locally, use Hostinger after upload or a local Apache/XAMPP setup with `.htaccess` support.
