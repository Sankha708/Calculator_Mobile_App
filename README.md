# ScientiFic Calculator 🧮

A modern, full-featured scientific calculator built as a native Android app using React and Capacitor.

## Features

- **Standard & Scientific Modes** — toggle between basic and advanced operations
- **Full Scientific Functions** — `sin`, `cos`, `tan`, `sin⁻¹`, `cos⁻¹`, `tan⁻¹`, `log`, `ln`, `√`, `^`, `!`
- **Constants** — `π` and `e`
- **Rad / Deg Toggle** — switch between Radian and Degree mode for trig functions
- **Inverse Toggle (`inv`)** — flip trig functions to their inverses instantly
- **Live Preview** — results update as you type
- **Native Android App** — packaged with Capacitor, runs natively on Android
- **Pixel-perfect Dark UI** — pitch-black theme with circular buttons matching native Android calculator aesthetics

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| Math Engine | mathjs |
| State Management | Zustand |
| Native Wrapper | Capacitor v6 |
| Android | Android Studio + Gradle |

## Project Structure

```
calculator/
├── src/
│   ├── components/
│   │   ├── common/        # Button, shared UI
│   │   ├── layout/        # Display component
│   │   └── modules/       # MobileKeypad
│   ├── core/engine/       # MathEngine (safe eval)
│   ├── store/             # Zustand state
│   └── App.tsx
├── android/               # Native Android project
└── dist/                  # Production build
```

## Getting Started

### Prerequisites
- Node.js 18+
- Android Studio (for Android build)
- JDK 17+

### Run in Browser
```bash
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### Build & Run on Android
```bash
npm run build
npx cap sync
```
Then open the `android/` folder in Android Studio and click **Run**.

## Screenshots

> Dark themed, circular button layout — inspired by modern Android calculator design.

## License

MIT © 2024
