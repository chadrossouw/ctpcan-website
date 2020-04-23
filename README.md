# 🚩 CTP CAN Website

## Contribute

1. Clone the repository by running `git clone https://github.com/CAN-Together/ctpcan-website.git`.
2. Make sure you have the latest release of [NodeJS](https://nodejs.org/en/) installed.
3. Run `npm install` in the root folder of the repository to install all dependencies.
4. Run `npm start` in the root folder to spin up a local instance of the website.

## NPM Scripts

- `npm start`: Starts an auto-updating instance of the website locally.
- `npm run build`: Builds a production version of the website into the `dist/` folder.
- `npm run docs`: Starts a Storybook instance based on all files in `docs/` with `.stories.js` suffix.

## Architecture

### HTML

- [Nunjucks](https://mozilla.github.io/nunjucks/) is used for HTML templating.
- [11ty](https://www.11ty.dev/) is used to build static HTML.
- [Chalk](https://www.npmjs.com/package/chalk) is used to log pretty messages to terminal/command-line during build process.
- [Axios](https://github.com/axios/axios) used to abstract away REST API calls during HTML build process.
- All REST API data is fed to templates through the `{{ dynamic }}` object.
- Other values are passed to `{{ meta }}` object.

### CSS

- No CSS pre-processor is used.
- All CSS selectors should follow the [BEM](https://en.bem.info/methodology/css/#selectors) convention.

### JavaScript

- No module resolution or transpilation used in project.

### Service Worker Caching

- [Native browser service worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) is used to cache files offline.
- [UUID](https://www.npmjs.com/package/uuid) is used to generate a new `cache.js` file with each build.
- Cache is bypassed in `.env` via `BYPASS_CACHE` value. Set to `0` to disable cache bypassing.

### Testing

- [Faker](https://www.npmjs.com/package/faker) is used to mock API calls if no `AIRTABLE_AUTH_TOKEN` is present in `.env`.
- [Storybook](https://storybook.js.org/) is used for documentation.


## Folder Structure

- `src/pages/` contains all URL routes and associated HTML.
- `src/static/` are for assets that are copied directly as is into the production build.
- `src/_data/` is for static JSON/Markdown or JavaScript files fetching data from endpoints. These files are passed directly into the build process.
- `src/_includes/` is for re-usable templating files that are consumed by pages.
- `docs/` is for all project documentation (please consult before contributing)
- `dist/` If a production version the website is built all files will be placed here. Might not be present initially since it is not committed to version control.
