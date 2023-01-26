export default function authHeader () {
    //Aktuálisan bejelentkezett user kiolvasása a local storage-ból.
    const user = JSON.parse(localStorage.getItem('user'));

    //Visszatérés a bejelentkezett felhasználó jwt tokenével.
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken }; //Spring Boot back-end
      // return { 'x-access-token': user.accessToken };       // Node.js Express back-end
    } else {
      return {};
    }

}