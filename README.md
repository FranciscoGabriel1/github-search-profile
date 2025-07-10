# GitHub User Search

A simple React + TypeScript app to look up GitHub users, view their profile info and public repositories, sort them, and drill into repo details.

**Live Demo:** https://github-search-profile-sandy.vercel.app/  
**Source Code:** https://github.com/FranciscoGabriel1/github-search-profile

---

## Getting Started

### Clone & Install

```bash
git clone https://github.com/FranciscoGabriel1/github-search-profile.git
cd github-search-profile
yarn install
```
> Or using npm
```bash
npm install
```

### Development
Start the local dev server at http://localhost:5173:

```bash
# Start the development server
# Using Yarn
yarn dev

# Or using npm
npm run dev

```

### Production Build
```bash
# Build for production
# Using Yarn
yarn build

# Or using npm
npm run build

```

### Run Tests
```bash
# Launch Jest in watch mode
# Using Yarn
yarn test

# Or using npm
npm test

# CI + coverage report
# Using Yarn
yarn test:ci

# Or using npm
npm run test:ci


```

## Features

- 🔍 Search for any GitHub user by username  
- 👤 View user details: avatar, name/login, followers, following, bio, and email (if available)  
- 📦 Browse their public repositories  
- ⭐️ Default sort: stars (descending)  
- 🔄 Change repository sort: stars ↑/↓, name A → Z, updated date  
- 📄 Click a repo to see full details: name, description, stars, primary language, and link to GitHub  

---

## Tech Stack

- **Framework:** React.js (functional components + hooks)  
- **Bundler:** Vite  
- **Routing:** react-router-dom  
- **Styling:** styled-components (theme + global styles)  
- **HTTP:** Axios via a simple IoC-friendly `IHttpClient` interface  
- **State:** React Context API  
- **Testing:** Jest + React Testing Library  
- **TypeScript:** full typing everywhere  

---

### Commits
- Commit messages follow the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#specification) standard

## Architecture & Patterns

- **Dependency Injection (IoC):**  
  Services depend on an `IHttpClient` interface (implemented by `AxiosHttpClient`), making them easy to mock and test.

- **Componentization:**  
  - `/components` for reusable UI bits (Input, Button, Card, Skeleton, etc.)  
  - `/pages` for route-level components (Home, RepoDetails)  
  - `/context` for shared state (UserContext)  
  - `/services` for API calls (GithubService)  
  - `/styles` for global theming and utility types

- **Responsive by design:**  
  The grid layout adapts from 1 column (mobile) up to 4 columns (desktop).