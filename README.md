This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

For ease of development these things were consider for use to complete and be used for this task - React, Next.js, Typescript, Material-UI, ESLint, Prettier, Jest/Enzyme, 3rd-party packages used - `next-seo`, `next-images`, `next-optimized-images`.

Time limit - from 2 to 3h

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

To run Jest unit tests type

```
npm run test / npm run test:watch for use with hot reload
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the files.

## Additional Tasks:
# Javascript:
- [x] ~~Add button which sorts phones or phone brands alphabetically~~
- [ ] Add filtering for phones or phone brands by any parameters (displayName, price etc.). On page load
use url query parameters to get filters (?brand=Doro&price=274.0 etc.)
- [x] ~~Add lazy loading for routes~~ `One of the reasons why I chose Next.js`
- [ ] Create a checkbox for user consent, if user does not give his consent, add route guards which tells
user that he cannot proceed without giving his consent
- [ ] Add button which removes phone or phone brands from the list
- [ ] Add favorite button which save phone or phone brand in memory. Saved selections should be
marked even after website reload
- [x] ~~Force application to throw an error on any function, catch it and make user friendly message in~~
~~website~~ `One of the reasons why I chose Next.js, handles this on production`
- [ ] Plug in any state management tool

# Styling
- [x] ~~Add transition or animations~~
- [ ] Use mixins `Wasn't used due to Material-UI styled package list use of fn useStyles()`
- [x] ~~Use pseudo classes~~
- [x] ~~Use custom font~~
- [x] ~~Use styling methodology~~

# HTML
- [x] ~~Add smooth tab indexing on every focusable element~~
- [x] ~~Add accessibility attributes on elements~~


# Troubleshooting

There's an incompatibility with Jest. 
If the tests are failing, Next.js changes TypeScript `"jsx": "react"` to `"jsx": "preserve"` everytime `npm run dev/next dev` is ran.
Solution: go to `tsconfig.json` and change `"jsx": "preserve"` to `"jsx": "react"` and then you can run `npm run test`
