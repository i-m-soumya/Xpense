📱 Expense Tracker App

A simple and intuitive React Native (Expo) app to track daily expenses, categorize spending, and visualize financial habits.

🚀 Features

💸 Add, edit, and delete expenses

📊 Category-wise tracking

📅 Daily / Monthly expense view

☁️ Local storage (AsyncStorage)

🎨 Beautiful UI (React Native Paper / UI Library)

⚡ Fast, minimal, and works offline

🛠️ Tech Stack

React Native (Expo)

TypeScript

React Navigation

Expo Router (optional)

AsyncStorage (local persistence)

UI Library (React Native Paper / NativeWind)

📦 Installation
1️⃣ Clone the repo
git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker

2️⃣ Install dependencies
npm install


or

yarn install

3️⃣ Start Expo
npx expo start

📁 Folder Structure
/app
  ├── components/
  ├── screens/
  │     ├── HomeScreen.tsx
  │     ├── AddExpenseScreen.tsx
  │     └── StatsScreen.tsx
  ├── navigation/
  ├── hooks/
  ├── utils/
  └── App.tsx

/assets
  ├── icons/
  └── fonts/

README.md
package.json
tsconfig.json

🔧 Scripts
"scripts": {
  "start": "expo start",
  "android": "expo run:android",
  "ios": "expo run:ios",
  "web": "expo start --web",
  "lint": "eslint ."
}

🧩 Environment Setup

Create a .env file (if you plan to add APIs later):

API_URL=

📘 How to Use the App

Open the app

Tap Add Expense

Enter amount, category & note

View total spend on the dashboard

Track progress over time


🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you want to change.

📄 License

MIT License © 2025 Soumya Ghosh