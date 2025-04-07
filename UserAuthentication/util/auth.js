import axios from "axios";

const API_Key = 'AIzaSyCBniIkNQDlPrAYEGerC27kIX1g7K_RG0o';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=` + API_Key;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true
  });

  console.log(response.data);
}

export async function createUser(email, password) {
  await authenticate('signUp', email, password);
}

export async function loginUser(email, password) {
  await authenticate('signInWithPassword', email, password);
}