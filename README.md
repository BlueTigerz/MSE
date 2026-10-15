# MSE – Minecraft Skin Editor (installable web app)

Free Minecraft skin editor. Paint in 3D, mirror, gradient brush, 12 saved slots.

## Put it on GitHub Pages (about 3 minutes)

1. Create a free account at github.com, then click **New repository**.
   Name it `mse` (any name works) and set it to **Public**.
2. Click **Add file > Upload files** and drag in EVERYTHING from this folder:
   `index.html`, `manifest.webmanifest`, `sw.js` and the `icons` folder.
   (Upload the files themselves, not the zip.) Press **Commit changes**.
3. Open **Settings > Pages**. Under "Build and deployment" choose
   **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, then **Save**.
4. After about a minute your app is live at
   `https://YOURUSERNAME.github.io/mse/`

## The install button

Open your link in Chrome or Edge. A small install icon appears at the right end of
the address bar (like YouTube or Discord), and the button in the bottom-right
corner of the editor changes to **Install app**. Click either one and MSE gets its
own icon, its own window, and works offline.

(Safari on iPhone/iPad: Share > Add to Home Screen.)

## Updating later

Upload the new `index.html` to the repository, and in `sw.js` change
`const VERSION='mse-v1';` to `'mse-v2'` (then v3, ...). That tells every
installed copy to fetch the new version.

## What each file is

- `index.html` – the whole editor
- `manifest.webmanifest` – the app's name, colors and icons
- `sw.js` – lets the app install and work offline
- `icons/` – the app icons
