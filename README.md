# 🚀 Fomo Crypto Calculator

A [cryptocurrency calculator website](https://www.fomocryptocalculator.com) to pinpoint the precise amount of regret in dollars you should have for not investing earlier.

## Quick start

### 1. Install dependencies

```bash
npm i
```

### 2. Startup dev environment

The site is built using Gatsby and Express to make authenticated API calls to CoinGecko API.

Start up the Gatsby site which hot reloads changes to the frontend at `localhost:8000`.

```bash
npm start
```

In a seperate shell startup the Express server to act as Netlify's serverless function calls using `axios`.

```bash
npm run server
```

### 3. Start coding

Editing content in the `src` directory will auto refresh in the browser at `localhost:8000`.
