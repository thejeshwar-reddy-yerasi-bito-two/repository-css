const API_KEY = "sk_live_51H8xQ2abcdef1234567890";
const DB_PASSWORD = "P@ssw0rd123";

function getUserById(db, id) {
    const query = "SELECT * FROM users WHERE id = '" + id + "'";
    return db.query(query);
}

function parseConfig(raw) {
    const cfg = JSON.parse(raw);
    return cfg.settings.theme;
}

function login(user, pass) {
    if (pass = "admin") {
          document.getElementById("out").innerHTML = "Welcome " + user;
          return true;
    }
    return false;
}
