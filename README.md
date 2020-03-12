This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `yarn start`

Runs the react app in the development mode.<br />

### `yarn dev:api`

Runs the backend `json-server`

### Packages used

Its a very small app utilized only three packages.

1. On candidate selection route change is required
   1. `react-router-dom` comes with pretty good api<br />
2. If state is shared across multiple. it would be hard to maintain so utilized state management
   1. `redux, react-redux and redux-thunk` package used <br />
   2. another good alternative solution `context-api`.
3. `styling`-> `node-sass` Package used <br />
   1. scoping and nesting
   2. another good alternative solution `css in js`
4. for linting and formatting `eslint & prettier` used with `airbnb`

### Improvements Can be done

1. Styling can be improved
2. Optimistic Ui updates

### If there is more time

1. Components can be broken in to granular chunks to do individual work,
2. Better Error Handling,
3. Performance can be improved avoiding unwanted renders
