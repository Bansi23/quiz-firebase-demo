export const environment = {
  production: true,
  apiURL: 'http://nop.satva.solutions/api/',
  emailPattern: '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}',
  encrydecryKey: '$@tva$ol7ti0n$',
  passwordPattern: '^(?=.*[A-Z]{1,})(?=.*[!@#$&*]{1,})(?=.*[0-9]{1,})(?=.*[a-z]{1,}).{8,}$',
  firebaseConfig : {
    apiKey: "AIzaSyAS9EJc3SZQwEZ1o8wJZF3W99ODjwZzGg4",
    authDomain: "quiz-demo-34181.firebaseapp.com",
    databaseURL: "https://quiz-demo-34181.firebaseio.com",
    projectId: "quiz-demo-34181",
    storageBucket: "",
    messagingSenderId: "943573571776",
    appId: "1:943573571776:web:ccd5c324c066bb9d"
  }
};
