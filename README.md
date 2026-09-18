# 😸 Cat Fact Check

A simple web app that fetches random cat facts from a public API and lets you save your favorites.

## 🔗 Live Demo
[View live site](#) 

## Features
- Fetches a random cat fact from the [Cat Facts API](https://catfact.ninja/) on load and on click
- Loading state while the fetch is in progress
- Error handling with a fallback message if the request fails
- Save facts to favorites (heart icon) — persisted with `localStorage`
- Remove saved facts individually
- Responsive layout

## Built With
- HTML
- CSS (Flexbox)
- Vanilla JavaScript (async/await, Fetch API)
- [Font Awesome](https://fontawesome.com/) for icons

## What I Learned
- Handling async data fetching with `async/await` and proper error handling (`try/catch/finally`)
- `fetch()` doesn't reject on HTTP error codes like 404/500 — added an explicit `res.ok` check
- Persisting state across page reloads using `localStorage` (and that it only stores strings, so data needs `JSON.stringify`/`JSON.parse`)
- Debugging a CSS stacking-context bug where an unrelated element was silently intercepting hover events on an overlapping button — fixed with `z-index`
- Flexbox patterns for pinning elements (`margin-top: auto` to anchor a button to the bottom of a variable-height card)

## Run Locally
```bash
git clone https://github.com/yourusername/cat-fact-check.git
cd cat-fact-check
```
Then just open `index.html` in your browser — no build step needed.

## Screenshot
