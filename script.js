// Show & Hide Sections
function showLogin() {
    document.getElementById("signup").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
}

function showSignUp() {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("signup").classList.remove("hidden");
}

function showDashboard() {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    document.getElementById("userName").innerText = localStorage.getItem("name");
    document.getElementById("coins").innerText = localStorage.getItem("coins");
}

function showWithdraw() {
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("withdraw").classList.remove("hidden");
    document.getElementById("withdrawCoins").innerText = localStorage.getItem("coins");
}

function backToDashboard() {
    document.getElementById("withdraw").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
}

// Sign Up Function
function signUp() {
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let msg = document.getElementById("signupMsg");

    if (!name || !email || !password) {
        msg.innerHTML = "❌ All fields are required!";
        return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("coins", 20000);  // Initial Coins

    msg.innerHTML = "✅ Sign Up Successful! Please Login.";
}

// Login Function
function login() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let storedEmail = localStorage.getItem("email");
    let storedPassword = localStorage.getItem("password");
    let msg = document.getElementById("loginMsg");

    if (email === storedEmail && password === storedPassword) {
        showDashboard();
    } else {
        msg.innerHTML = "❌ Invalid Email or Password!";
    }
}

// Logout Function
function logout() {
    document.getElementById("dashboard").classList.add("hidden");
    document.getElementById("login").classList.remove("hidden");
}

// Withdrawal Function
function withdraw() {
    let coins = parseInt(localStorage.getItem("coins"));
    let amount = parseInt(document.getElementById("withdrawAmount").value);
    let method = document.getElementById("withdrawMethod").value;
    let msg = document.getElementById("withdrawMsg");

    if (coins < 15000) {
        msg.innerHTML = "❌ You need at least 15,000 coins!";
        msg.className = "error";
        return;
    }

    if (!amount || amount <= 0 || !method) {
        msg.innerHTML = "❌ Enter valid amount and method!";
        msg.className = "error";
        return;
    }

    if (amount > coins) {
        msg.innerHTML = "❌ Insufficient coins!";
        msg.className = "error";
        return;
    }

    localStorage.setItem("coins", coins - amount);
    document.getElementById("coins").innerText = localStorage.getItem("coins");
    document.getElementById("withdrawCoins").innerText = localStorage.getItem("coins");

    msg.innerHTML = "✅ Withdrawal Successful!";
    msg.className = "success";
        }
