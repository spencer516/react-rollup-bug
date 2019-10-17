### React DOM + Rollup Treehsaking

To see this bug in action:

1. Clone this repo
2. Install dependencies with `yarn install` or `npm install`
3. Run `yarn start:treeshake`
4. Visit `localhost:10001`

If the react app (defined in `main.jsx`) is rendering correclty, you should see: "Hello, World!" inside of an `<h1>` tag

This is "fixed" by disabling treeshaking, which you can do:

```sh
yarn start:notreeshake
```
