# 🚀 GitHub Stats Analyzer

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, interactive web application for visualizing GitHub repository statistics with professional animations and comprehensive data analytics.**

[Features](#-features) • [Installation](#-installation) • [Usage](#-usage) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🎯 Overview

GitHub Stats Analyzer is a sophisticated web application that provides comprehensive insights into GitHub user profiles and repository statistics. Built with modern web technologies, it offers an intuitive interface with real-time data visualization, interactive animations, and professional PDF export capabilities.

### Key Highlights

- ✨ **Interactive UI**: Professional animated particle system with smooth 60fps performance
- 📊 **Data Visualization**: Multiple chart types including pie charts, bar charts, and heatmaps
- 🎨 **Modern Design**: Dark/light mode support with responsive layout
- 📄 **PDF Export**: Generate professional PDF reports with user statistics
- ⚡ **Optimized Performance**: Memoized components, efficient rendering, and optimized animations
- 🔍 **Advanced Filtering**: Search and filter repositories by multiple criteria

---

## ✨ Features

### Core Functionality

- **GitHub API Integration**
  - Fetch user profiles and repository data
  - Real-time rate limit monitoring
  - Support for Personal Access Tokens (PAT) for increased API limits
  - Graceful error handling and fallback mechanisms

- **Data Visualizations**
  - **Language Distribution**: Interactive pie chart showing programming language usage
  - **Contributions Calendar**: GitHub-style contribution heatmap for the past year
  - **Social Statistics**: Bar chart comparing followers vs following with ratio analysis
  - **Repository Metrics**: Comprehensive stats including stars, forks, and update dates

- **User Experience**
  - **Interactive Background**: Particle system with mouse interaction effects
  - **Dark/Light Mode**: Seamless theme switching with persistent preferences
  - **Search & Filter**: Filter repositories by name, description, language, and sort by multiple criteria
  - **Skeleton Loaders**: Smooth loading states for better UX
  - **Responsive Design**: Fully responsive layout for all screen sizes

- **Export Capabilities**
  - **PDF Generation**: Export comprehensive user statistics as a professional PDF document
  - **Custom Formatting**: Well-structured PDF with all charts, stats, and repository information
  - **Branded Footer**: Professional PDF footer with attribution

---

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.2.0** - Modern UI library with hooks and functional components
- **Vite 5.0.0** - Next-generation build tool for fast development and optimized production builds

### Styling & Animation
- **Tailwind CSS 3.4.18** - Utility-first CSS framework for rapid UI development
- **Framer Motion 12.23.24** - Production-ready motion library for React
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing

### Data Visualization
- **Recharts 3.4.1** - Composable charting library built on React components
- **react-github-calendar 4.5.11** - GitHub-style contribution calendar component

### Utilities
- **jsPDF 3.0.3** - Client-side PDF generation library
- **html2canvas 1.4.1** - Screenshot functionality (if needed)

---

## 📦 Installation

### Prerequisites

- **Node.js** >= 16.0.0
- **npm** >= 8.0.0 (or **yarn** >= 1.22.0)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/github-stats-analyzer.git
   cd github-stats-analyzer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

---

## 🎯 Usage

### Development Mode

```bash
npm run dev
```

Starts the Vite development server with hot module replacement (HMR) enabled.

### Production Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally for testing.

### Using the Application

1. **Enter GitHub Username**: Input any GitHub username in the search field
2. **Optional - Add Personal Access Token**: 
   - Generate a PAT from GitHub Settings → Developer settings → Personal access tokens
   - Add token for increased API rate limits (5,000 requests/hour vs 60/hour)
   - Token is stored securely in browser's localStorage
3. **Fetch Data**: Click the "Fetch" button to retrieve user statistics
4. **Explore Visualizations**: View language charts, contribution graphs, and social stats
5. **Filter Repositories**: Use search and filter options to find specific repositories
6. **Export PDF**: Click "Export as PDF" to generate a comprehensive report

---

## 📁 Project Structure

```
github-stats-analyzer/
│
├── public/                      # Static assets
│   └── favicon.svg             # GitHub-themed favicon
│
├── src/                        # Source code
│   ├── components/             # React components
│   │   ├── AnimatedBackground.jsx
│   │   │   └── Interactive particle system with mouse interactions
│   │   ├── ContributionsGraph.jsx
│   │   │   └── GitHub contributions calendar heatmap
│   │   ├── CustomTooltip.jsx
│   │   │   └── Custom tooltip component for Recharts
│   │   ├── FollowersFollowingChart.jsx
│   │   │   └── Bar chart for followers/following comparison
│   │   ├── LanguageChart.jsx
│   │   │   └── Pie chart for language distribution
│   │   ├── RateLimitStatus.jsx
│   │   │   └── API rate limit monitoring component
│   │   ├── RepoCard.jsx
│   │   │   └── Individual repository card with animations
│   │   └── SkeletonLoader.jsx
│   │       └── Loading state placeholders
│   │
│   ├── utils/                  # Utility functions
│   │   └── exportToPDF.js
│   │       └── PDF generation with jsPDF
│   │
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles and animations
│
├── index.html                  # HTML entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.cjs         # Tailwind CSS configuration
├── postcss.config.cjs          # PostCSS configuration
└── .gitignore                  # Git ignore rules
```

### Component Architecture

#### Core Components

- **`App.jsx`**: Main application logic, state management, API integration, and routing
- **`AnimatedBackground.jsx`**: Optimized canvas-based particle system with interactive mouse effects
- **`RepoCard.jsx`**: Memoized repository card component with hover animations

#### Visualization Components

- **`LanguageChart.jsx`**: Recharts pie chart with custom tooltips and legends
- **`ContributionsGraph.jsx`**: GitHub-style contribution calendar with year filtering
- **`FollowersFollowingChart.jsx`**: Bar chart with animated stat cards and ratio calculations
- **`CustomTooltip.jsx`**: Reusable tooltip component for consistent chart styling

#### Utility Components

- **`RateLimitStatus.jsx`**: Real-time API rate limit monitoring with visual progress indicator
- **`SkeletonLoader.jsx`**: Loading state components for better perceived performance

---

## 🔌 API Integration

### GitHub REST API

The application uses the official GitHub REST API v3 to fetch user data:

#### Endpoints Used

- `GET /users/{username}` - Fetch user profile information
- `GET /users/{username}/repos` - Fetch user repositories
- `GET /rate_limit` - Check API rate limit status

#### Authentication

- **Unauthenticated**: 60 requests/hour per IP address
- **Authenticated (PAT)**: 5,000 requests/hour per token

#### Rate Limit Handling

- Real-time rate limit monitoring
- Visual progress indicator
- Automatic retry with fallback to unauthenticated requests
- User-friendly error messages

### Example API Usage

```javascript
// Fetch user profile
const response = await fetch(`https://api.github.com/users/${username}`, {
  headers: {
    'Authorization': token ? `token ${token}` : undefined
  }
});

const profile = await response.json();
```

---

## ⚡ Performance

### Optimization Strategies

1. **React Optimizations**
   - `React.memo()` for component memoization
   - Efficient state management to prevent unnecessary re-renders
   - Lazy loading for heavy components

2. **Animation Performance**
   - Optimized particle system (60 particles max)
   - Limited connection calculations (3 per particle)
   - Removed expensive operations (shadow blur)
   - Throttled mouse event handlers
   - `requestAnimationFrame` for smooth 60fps animations

3. **Rendering Optimizations**
   - Canvas-based particle system for efficient rendering
   - Batch drawing operations
   - Passive event listeners
   - GPU-accelerated CSS animations

4. **Bundle Optimization**
   - Vite's code splitting
   - Tree shaking for unused code
   - Optimized production builds

### Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Animation Frame Rate**: Consistent 60fps
- **Bundle Size**: Optimized with Vite

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

### Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit with descriptive messages (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Style

- Follow React best practices
- Use functional components with hooks
- Maintain consistent code formatting
- Add comments for complex logic
- Write descriptive commit messages

### Pull Request Process

1. Ensure all tests pass (if applicable)
2. Update documentation if needed
3. Request review from maintainers
4. Address feedback and suggestions

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Varchasva Khare**

- GitHub: [@varchasvakhare2022](https://github.com/varchasvakhare2022)
- Project Link: [https://github.com/varchasvakhare2022/Github-Stats-Analyzer](https://github.com/varchasvakhare2022/Github-Stats-Analyzer)

---

## 🙏 Acknowledgments

- [GitHub API](https://docs.github.com/en/rest) for providing comprehensive API documentation
- [Recharts](https://recharts.org/) for excellent charting library
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework
- [Vite](https://vitejs.dev/) for blazing-fast build tool

---

<div align="center">

**Built with ❤️ by Varchasva Khare**

⭐ Star this repo if you find it helpful!

[Report Bug](https://github.com/varchasvakhare2022/Github-Stats-Analyzer/issues) • [Request Feature](https://github.com/varchasvakhare2022/Github-Stats-Analyzer/issues)

</div>
