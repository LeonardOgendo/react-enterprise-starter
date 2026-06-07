# React Enterprise Starter

Production-ready React + TypeScript SPA starter built with Vite, featuring a scalable feature-based architecture, testing setup, code quality tooling, and modern AI-assisted development conventions.

### Status

`✅ Actively maintained`

This repository is continuously updated to align with modern React, TypeScript, Vite, and frontend engineering best practices.

---

## Why This Starter Template?

Most React starters stop at project creation.

Modern AI coding tools can scaffold applications quickly, but consistency in architecture, tooling, and development conventions remains important for long-term maintainability.

This starter provides a production-ready foundation with a proven project structure, established tooling, and AI-assisted development conventions, helping teams start faster while maintaining consistency across projects.

---

## Features

- React + TypeScript
- Vite
- Tailwind CSS v4
- Feature-based architecture
- Path aliases configuration
- Testing setup
- Environment configurations
- AI-assisted development conventions
- Scalable project structure

---

## Project Structure

```text
src/
├── app/
│   ├── api/
│   ├── layouts/
│   ├── providers/
│   └── router/
│
├── assets/
│
├── features/
│   └── auth/
│       ├── api/
│       ├── components/
│       ├── hooks/
│       ├── pages/
│       ├── schemas/
│       └── types/
│
├── shared/
│   ├── components/
│   ├── constants/
│   ├── hooks/
│   ├── services/
│   └── utils/
│
├── styles/
│
├── App.tsx
└── main.tsx
```

### Architecture Overview

* **app/** → Application-level configuration, providers, layouts, routing, and API setup.
* **assets/** → Static application assets processed by Vite.
* **features/** → Self-contained business features organized by domain. Add more features in this folder
* **shared/** → Reusable components, hooks, utilities, constants, and services shared across features.
* **styles/** → Global styling and design system entry points.
* **App.tsx** → Root application component.
* **main.tsx** → Application bootstrap entry point.

Each feature owns its components, hooks, API layer, schemas, and types, promoting scalability and separation of concerns.

---

## Quick Start

### Clone Repository

```bash
git clone https://github.com/LeonardOgendo/react-enterprise-starter.git
cd react-enterprise-starter
```

### Install dependencies & Run

```bash
npm install
npm run dev
```

---

*Happy Coding!*