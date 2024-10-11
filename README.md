# deno2_test

Deno 2 is out now! I wanted to give it a try and get familiar with it.

- Deno is fully TypeScript safe.
- Deno is a "all-in-one" run-time.
- Deno supports many frameworks like Next, Remix, Vue, Astro, svelte, and more...

## Deno 2 Commands

### deno -R main.ts

- Automatically run the main.ts file without manually granting "all read access".

### deno check

- "tsc" can be done by running "deno check"

### deno fmt

- "Prettier" can be done by running "deno fmt"

### deno lint

- "eslint" can be done by running "deno lint"

### deno file.js

- "node file.js" can be done by running "deno file.js"

### deno file.ts

- "ts-node file.ts" can be done by running "deno file.ts"

### deno install

- "npm install" can be done by running "deno install"

### deno run

- "npm run" can be done by running "deno run"

### deno run --watch

- "nodemon" can be done by running "deno run --watch"

### deno compile

- "nexe / pkg" can be done by running "deno compile"

### deno upgrade

- "nvm / n / fnm" can be done by running "deno upgrade"

### deno add

- "npm add" can be done by running "deno add"

### deno init

- "npm init" can be done by running "deno init"

### "deno --allow-env" or "deno -E"

- Will enable access to environment variables to the imported npm packages

### deno -A npm:create-next-app

- Running "npx create-next-app" can be done by running "deno -A npm:create-next-app"

### deno task

- Running "deno task" will show you all the available tasks from package.json file.

#### deno task dev

- "npm run dev" = "deno task dev"
