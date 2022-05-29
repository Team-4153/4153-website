# FRC Team 4153 Website
[![forthebadge](https://forthebadge.com/images/badges/made-with-typescript.svg)](https://forthebadge.com)

## Powered by NextJS

## Development and build instructions

Other teams: feel free to use this as a template for your own websites. Make sure you replace the banners, images and logo files (duh).

Needs [NodeJS](https://nodejs.org) >= 14.5.0 and [Yarn](https://yarnpkg.com)
1. Clone repo using git
2. Create Google API Keys for Google Calendar and Analytics
3. Create a .env file at the project root **DO NOT COMMIT THIS FILE**
4. Add the following lines to .env
```dotenv
KEY=<YOUR_CALENDAR_API_KEY>
```
5. Install dependencies with `yarn install`. This may take a while depending on your internet so grab a cup of coffee or something
6. Run development server with `yarn run dev`
7. Change out files and have fun
### Next Steps
- Deploy to
[Vercel](https://vercel.com/guides/deploying-nextjs-with-vercel) or 
[Firebase](https://medium.com/nerd-for-tech/lets-deploy-a-next-js-app-with-firebase-hosting-e070b3aecd04).
Other services may work, but I recommend these simply bc they're free, what I use, and relatively easy
  - Make sure you test first using `yarn run build`
- Get a domain