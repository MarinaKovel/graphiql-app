# graphiql-app

## Install and usage of the project

1. Clone the repo

```js
git clone https://github.com/MarinaKovel/graphiql-app.git
```

2. Install Yarn packages

```js
yarn;
```

3. Usage

```js
yarn dev
```

4. Test

```js
yarn cy:coverage
```

Before starting the app, create .env.local file in the graphiql-app folder and write the following variables in it:

```js
VITE_FIREBASE_API_KEY=AIzaSyAfyNKkLUAv7ag9g3_f7HlAKzExOlt5v9Y
VITE_FIREBASE_AUTH_DOMAIN=auth-graphiql.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=auth-graphiql
VITE_FIREBASE_STORAGE_BUCKET=auth-graphiql.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=737227062940
VITE_FIREBASE_APP_ID=1:737227062940:web:e97969f09bd13f13c9b759
```
