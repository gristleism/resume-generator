# Resume Generator

Resume generator takes a file in [JSON Resume](https://jsonresume.org/) format and generates a Webpage and matching formatted PDF automatically.

To see an example, visit this repositories [Github Page](https://gristleism.github.io/resume-generator/).

It can be run manually or works extremely well with a static hosting tool like [Netlify](https://www.netlify.com/) to allow an automatic rebuild of resources on changes to the repository.

## Usage

Clone the repository and install dependencies using `npm install` or `yarn install`. Update [resume.json](./resume.json) with your information. You can hot reload changes to the built site you're working by running a local server with `npm run start` or `yarn run start`, depending on which Package Manager you use.

## Deployment

Use `npm run build` or `yarn run build` to build the `dist` folder. The `dist` folder will contain all files and dependencies necessary for static deployment - simply point your tool to the `dist` folder.
