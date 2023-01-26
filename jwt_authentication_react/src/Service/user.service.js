import axios from 'axios';

import authHeader from './auth-header';

const API_URL = "http://localhost:8080/api/test/";

//Publikus tartalom lekérése a szervertől. Ezt a tartalmat bárki elérheti bejelentkezés nélkül.
const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

//Felhasználó oldal lekérése a szervertől. A header-ben elküldjük a bejelentkezett felhasználó jwt token-ét.
//A kérés akkor teljesül, ha a jwt token érvényes és rendelkezik user szerepkörrel.
const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

//Moderátor oldal lekérése a szervertől. A header-ben elküldjük a bejelentkezett felhasználó jwt token-ét.
//A kérés akkor teljesül, ha a jwt token érvényes és rendelkezik moderator szerepkörrel.
const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

//Admin oldal lekérése a szervertől. A header-ben elküldjük a bejelentkezett felhasználó jwt token-ét.
//A kérés akkor teljesül, ha a jwt token érvényes és rendelkezik admin szerepkörrel.
const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;