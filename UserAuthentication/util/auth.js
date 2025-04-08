import axios from "axios";

const API_Key = "AIzaSyCBniIkNQDlPrAYEGerC27kIX1g7K_RG0o";

async function authenticate(mode, email, password) {
  const url =
    `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=` + API_Key;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response.data.idToken;
  return token;
}

export function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export function loginUser(email, password) {
  return authenticate("signInWithPassword", email, password);
}
