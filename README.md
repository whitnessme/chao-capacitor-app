# Next Capacitor (iOS & Android) App
> Followed [Making Native Mobile App with Next.js and Capacitor](https://galaxies.dev/nextjs-and-capacitor) tutorial.



## Steps to Run this App Locally:
> With live reload! (step 2)

### 1. Install dependencies & static build:

```bash
npm install
npm run static
```

### 2. Create `capacitor.config.json` file based off `capacitor.config.json.example`:
- Use your IP address, replacing the `x`'s.
- Find your local IP with `ipconfig getifaddr en0` on Mac | `ipconfig` on Windows and look for IPv4 address.
### 3. Apply changes of the web folder & config:
```bash
npx cap copy
```

### 4. Make sure to have `Android Studio` and `XCode` applications for running the mobile apps. 

### 5. Run the development server on another terminal:

```bash
npm run dev
```

### 6. Open either or both native projects through the Capacitor CLI:
```bash
npx cap open ios
npx cap open android
```
### 7. Wait for Xcode & Android Studio to finish building and press play ▶️ !

-----------

## Helpful Dev Commands:

```bash
# Builds Nextjs project and exports the static build
npm run static

# Sync all web code into the native platforms
npx cap sync
```