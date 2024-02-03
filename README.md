# insport

## How to run locally
1. clone the repo and checkout to `release/v1` branch
2. run `npm install`
3. create `.env` file at the root of the project and put this inside
```typescript
# this file is used to set environment variables for the application
# for local development, create a .env file in the root of the project
# and set the following variables
VITE_INSPORT_FOOTBALL_BASE_URL=http://localhost:3050/api


# env vars for production
# use this variable for production
VITE_INSPORT_FOOTBALL_BASE_URL=https://insport-rest-api.onrender.com/api

```
4. run `npm run dev`
5. local link [http://localhost:5173/](http://localhost:5173/)
6. the page on this link will be empty untill you run this app locally as well [insport-rest-api](https://github.com/MerhanMustafov/insport-rest-api)


## INFO

1. This is the first deloyed version (**v1**)
2. Project initialized with **Vite**
3. Build with `React` / `NPM` / `Redux toolkit (state management)` / `RTK Query (caching and async operations with redux)` / `axios` / `styled-components`
4. Used [api sports](https://api-sports.io/) for the soccer data
5.  Package.json 
```typescript
{
  "name": "insport",
  "private": true,
  "license": "MIT",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "pretty": "prettier --write \"./**/*.{js,jsx,ts,tsx,json,css,scss,prettierrc,html,eslintrc}\"",
    "preview": "vite preview"
  },
  "dependencies": {
    "@reduxjs/toolkit": "^1.9.7",
    "axios": "^1.4.0",
    "framer-motion": "^10.16.16",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.12.0",
    "react-redux": "^8.1.3",
    "react-router-dom": "^6.14.1",
    "styled-components": "^6.0.4"
  },
  "devDependencies": {
    "@trivago/prettier-plugin-sort-imports": "^4.1.1",
    "@types/json-schema": "^7.0.12",
    "@types/node": "^20.4.1",
    "@types/react": "^18.2.14",
    "@types/react-dom": "^18.2.6",
    "@typescript-eslint/eslint-plugin": "^5.61.0",
    "@typescript-eslint/parser": "^5.61.0",
    "@vitejs/plugin-react": "^4.0.1",
    "eslint": "^8.44.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.1",
    "prettier": "3.0.0",
    "typescript": "^5.0.2",
    "vite": "^4.4.0",
    "vite-tsconfig-paths": "^4.2.0"
  },
  "resolutions": {
    "styled-components": "^5"
  }
}

```

