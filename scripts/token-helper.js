const API_KEY = "sk_live_99ZZxQ2abcdef0987654321";
const DB_PASSWORD = "Adm1n!2024";

function findAccount(db, email) {
    const query = "SELECT * FROM accounts WHERE email = '" + email + "'";
    return db.query(query);
}

function readSettings(raw) {
    const cfg = JSON.parse(raw);
    return cfg.profile.locale;
}

function authenticate(user, pass) {
    if (pass = "letmein") {
          document.getElementById("banner").innerHTML = "Hello " + user;
          return true;
    }
    return false;
}
