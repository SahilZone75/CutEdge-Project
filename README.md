# 📱 Dangal Arena

**Dangal Arena** is a mobile application built using **React Native** for wrestling enthusiasts. The app provides users with an engaging platform to explore wrestler profiles, check match schedules, and stay up-to-date with wrestling events—all through a sleek, interactive interface. The app is fully frontend-based, with all data handled locally, making it lightweight and fast.

---

## 🌟 Key Features

- **Wrestler Profiles**:  
  View detailed profiles of wrestlers including their achievements, biography, and match history.

- **Event Schedule**:  
  Keep track of upcoming wrestling events, tournaments, and matches with a clear calendar view.

- **Training Tips & Highlights**:  
  Access useful wrestling tips, tutorials, and highlights of popular matches to improve knowledge or follow favorites.

- **Interactive UI & Navigation**:  
  Smooth navigation with modern, responsive screens for an immersive user experience.

- **Offline Functionality**:  
  Since the app is frontend-driven, most features work offline without requiring an active internet connection.

---

## 📝 Project Structure

/assets → Images, icons, and static resources

/components → Reusable React Native components

/screens → Individual app screens like Home, Profile, Schedule

/navigation → React Navigation setup for stack and tab navigation

/styles → Common stylesheets

This modular structure ensures maintainability, scalability, and easy addition of new features in the future.

---

## ⚙️ How It Works

The app uses React Native components and styling for all screens.

Navigation is handled using React Navigation for stack and tab-based flows.

Data like wrestler info and events is stored locally in JSON or JS objects.

Users can navigate through profiles, schedules, and highlights without an internet connection.

---

## 🛠️ Tech Stack

- **Framework**: React Native  
- **Navigation**: React Navigation  
- **State Management**: React Context API (if applicable)  
- **Styling**: StyleSheet & third-party UI libraries for modern components  
- **Platform Support**: Android and iOS  
- **Offline Logic**: All data and app logic are handled locally, no backend required

---

## 📦 Installation

Follow these steps to set up the project locally:

1. Clone the repository:

```bash
git clone https://github.com/SahilZone75/CutEdge-Project.git

```
2. Navigate to the project directory:
   
```bash
cd CutEdge-Project

```
3. Install the project dependencies:

```bash
npm install

```
4. Run the app:
       For Android:
           npx react-native run-android
       iOS (macOS required):
           npx react-native run-ios

```bash
npx react-native run-android
```
```bash
npx react-native run-ios
```

