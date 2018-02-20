// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDNAtXReZ2jCUYAK7NpDSk_9x6I3otjiPM",
    authDomain: "angular5blog.firebaseapp.com",
    databaseURL: "https://angular5blog.firebaseio.com",
    projectId: "angular5blog",
    storageBucket: "angular5blog.appspot.com",
    messagingSenderId: "168941590942"
  }
};
