# Clash Ores Calculator

A comprehensive calculator and resource management tool for Clash games, built with Next.js 14. This application helps players optimize their gameplay by providing various calculators for resource management, upgrades, and progression tracking.

## Features

- **Gain Calculator**: Calculate resource gains over time
- **Single Calculator**: Individual resource calculations
- **All Resources Calculator**: Comprehensive resource management

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Zustand (State Management)

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js (v18.0.0 or higher)
- npm/pnpm (v8.0.0 or higher)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/sndell/clash-ores
cd clash-ores
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

```env
CLASH_API_TOKEN=your_api_url_here
```

4. Run the development server:

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
clash-ores/
├── public/          # Static assets (images, icons)
├── src/
│   ├── app/         # Next.js app router pages
│   ├── components/  # Reusable UI components
│   ├── features/    # Feature-specific code
│   │   ├── gain-calculator/     # Resource gain calculations
│   │   ├── max-calculator/      # Maximum resource tracking
│   │   └── upgrade-calculator/  # Upgrade cost calculations
│   ├── hooks/       # Custom React hooks
│   ├── stores/      # Zustand stores
│   ├── styles/      # Global styles
│   └── utils/       # Utility functions
```

### Features Directory Structure

Each feature follows a modular architecture with:

- `components/`: Feature-specific UI components
- `stores/`: Feature-specific Zustand state management stores
- `types/`: Feature-specific TypeScript type definitions
- `util/`: Feature-specific Helper functions and utilities
- `constants/`: Feature-specific constants
- `actions/`: Feature-specific API calls and data fetching logic
