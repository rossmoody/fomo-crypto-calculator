# 🚀 Quick start

## 1. Install dependencies

```
npm i
```

## 2. Startup dev environment

The site is built using Gatsby and Express to make authenticated API calls to CoinMarket API.

Start up the Gatsby site which hot reloads changes to the frontend.

```
npm start
```

In a seperate shell startup the Express server to act as Netlify's serverless function calls using `node-fetch`.

```
npm run server
```
