# 🎬 Movizz - Movie Discovery App

A modern movie discovery application built with React and Vite, featuring real-time search, trending movies, and a beautiful UI. This project was created as a learning exercise while studying React fundamentals.

## ✨ Features

- **🔍 Real-time Movie Search**: Search through thousands of movies with debounced input
- **📈 Trending Movies**: Display top-searched movies from your search history
- **🎨 Modern UI**: Clean and responsive design with Tailwind CSS
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **⭐ Movie Ratings**: Display movie ratings, release year, and language
- **🔄 Search Analytics**: Track search patterns using Appwrite backend

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Backend**: Appwrite (Database & Backend as a Service)
- **API**: The Movie Database (TMDB) API
- **State Management**: React Hooks (useState, useEffect)
- **Utilities**: react-use (for debouncing)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Appwrite account (for backend functionality)
- TMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vedantbhole/movizz.git
   cd movizz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   ```

4. **Get API Keys**
   
   - **TMDB API**: Sign up at [The Movie Database](https://www.themoviedb.org/settings/api) to get your API key
   - **Appwrite**: Create a project at [Appwrite](https://appwrite.io/) and set up a database with a collection for storing search analytics

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application

## 📁 Project Structure

```
movizz/
├── public/                 # Static assets
│   ├── hero.png           # Hero banner image
│   ├── logo.png           # App logo
│   ├── no-movie.png       # Default movie poster
│   ├── search.svg         # Search icon
│   └── star.svg           # Rating star icon
├── src/
│   ├── components/        # React components
│   │   ├── MovieCard.jsx  # Individual movie display
│   │   ├── Search.jsx     # Search input component
│   │   └── Spinner.jsx    # Loading spinner
│   ├── App.jsx           # Main application component
│   ├── appwrite.js       # Appwrite backend integration
│   ├── App.css           # Application styles
│   └── main.jsx          # Application entry point
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🎯 Key Features Explained

### Search Functionality
- **Debounced Search**: Uses `react-use` to prevent excessive API calls while typing
- **Real-time Results**: Fetches movies from TMDB API as you type
- **Error Handling**: Graceful error handling for failed API requests

### Trending Movies
- **Search Analytics**: Tracks search terms and their frequency using Appwrite
- **Top Searches**: Displays the most searched movies in a trending section
- **Persistent Data**: Search history is stored in the cloud database

### Movie Cards
- **Rich Information**: Shows movie title, rating, release year, and language
- **Fallback Images**: Uses default poster for movies without images
- **Responsive Design**: Cards adapt to different screen sizes

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Learning Outcomes

This project demonstrates several React concepts:

- **Hooks**: useState, useEffect, custom hooks
- **Component Composition**: Breaking UI into reusable components
- **API Integration**: Fetching data from external APIs
- **State Management**: Managing application state with React hooks
- **Debouncing**: Optimizing API calls with debounced search
- **Error Handling**: Graceful error states and loading indicators
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 🤝 Contributing

This is a learning project, but feel free to:
- Report bugs
- Suggest new features
- Submit pull requests for improvements

---

**Note**: This project was created as a learning exercise while studying React fundamentals. It's a replica/learning project.
