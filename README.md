# LangA

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF.svg)](https://vitejs.dev/)
[![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.1-pink.svg)](https://styled-components.com/)

## Project Overview

LangA is a modern community platform for AI node sharing and discovery, built as a frontend application for the LangStar LLM framework ecosystem. It enables users to upload, discover, and download custom AI workflow nodes in a collaborative environment.

### Main Features and Purpose

1. **Node Marketplace**: Browse and discover AI nodes created by the community
2. **Node Upload**: Share your custom AI workflow nodes with other users
3. **Node Download**: Download and integrate verified nodes into your workflows
4. **Search & Discovery**: Find nodes by category, tags, and search queries
5. **Theme Support**: Dark and light mode for optimal user experience
6. **Responsive Design**: Works seamlessly across desktop and mobile devices

## Local Installation

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd langA-front
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   VITE_API_BASE_URL=http://localhost:8080/api
   VITE_APP_NAME=LangA Frontend
   VITE_NODE_ENV=development
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## Dependencies

| Name | Version | Purpose |
|------|---------|---------|
| `react` | ^18.2.0 | Core React library |
| `react-dom` | ^18.2.0 | React DOM rendering |
| `react-router-dom` | ^6.20.1 | Client-side routing |
| `styled-components` | ^6.1.1 | CSS-in-JS styling |
| `axios` | ^1.6.2 | HTTP client for API calls |
| `typescript` | ^5.2.2 | TypeScript compiler |
| `vite` | ^5.0.0 | Build tool and dev server |
| `@vitejs/plugin-react` | ^4.1.1 | Vite React plugin |
| `eslint` | ^8.53.0 | Code linting |
| `@typescript-eslint/eslint-plugin` | ^6.10.0 | TypeScript ESLint plugin |
| `@typescript-eslint/parser` | ^6.10.0 | TypeScript ESLint parser |

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Route-specific page components
├── hooks/              # Custom React hooks
├── services/           # API service layer
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── contexts/           # React contexts (Theme, etc.)
├── styles/             # Theme and styling definitions
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## Features

- **Modern UI/UX**: Clean, responsive design with dark/light theme support
- **Type Safety**: Full TypeScript implementation for better development experience
- **Performance**: Optimized with Vite for fast development and builds
- **Accessibility**: Built with accessibility best practices
- **API Ready**: Pre-configured for backend integration
- **Theme System**: Comprehensive theming with context-based state management

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
