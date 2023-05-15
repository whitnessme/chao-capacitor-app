# Next Capacitor (iOS & Android) App
> Followed [Making Native Mobile App with Next.js and Capacitor](https://galaxies.dev/nextjs-and-capacitor) tutorial.



## Steps to Run this App Locally:
> With live reload! (step 2)

### 1. Install dependencies & static build:

```bash
npm install
npm run static
npx cap sync
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

## Planning

> The Chao Garden in Sonic Adventure 2 Battle was my favorite thing in elementary school and I'm very disappointed that the new Sonic games got rid of it. I want this app to keep track of your chaos! Data created using the [Chao Island Wiki](https://chao-island.com/)

### Life Cycle

Egg --> Child Chao --> Child Cocoon --> Adult Chao --> Adult Cocoon --> Egg again or Death

### Alignment

Hero Chao -- Neutral Chao -- Dark Chao

### Evolution

Normal -- Swim -- Fly -- Run -- Power

### Colors

1. Monotone or Two-tone
2. White, blue, red, yellow, orange, sky-blue, pink, green, brown, purple, grey, lime-green, black

### Personality

Gentle, Naughty, Energetic, Quiet, Big eater, Chatty, Easily bored, Curious, Carefree, Careless, Smart, Cry baby, Lonely, Naive, No personality