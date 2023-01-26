import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth/";

//Regisztrációs kérés küldése a szervernek
//A válaszok: - "Error: Username is already taken!"
//            - "Error: Email is already in use!"
//            - "User registered successfully!"
const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

//Bejelentkezés kérés küldése a szervernek
//A válasz egy JwtResponse objetum, ami tartalmazza: - jwt token, id, felhasználói név, emailcím, szerepkörök.
//Ha van jwt token a válaszban, akkor elmentjük a local storage-ra a key-value párost.
//Key: "user" , value: jwt token
const login = async (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

//Kijelentkezés
//User törlése a local storage-ból. Key-value páros, ahol a key: "user"
const logout = () => {
  localStorage.removeItem("user");
};

//Aktuálisan bejelentkezett felhasználó lekérése a local storage-ból key szerint.
//A felhasználó változói: jwt token, id, felhasználói név, emailcím, szerepkörök.
const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;