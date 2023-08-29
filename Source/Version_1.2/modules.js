var ui = {};

// module for navigation bar
ui.navigation = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#" onclick="defaultModule()">AFCU</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#createAccount" onclick="loadCreateAccount()" id="createAccount">Create Account</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadLogin()" id="login">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadBalance()">Balance</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="loadAllData()">AllData</a>
                </li>
            </ul>
        </div>
    </nav>
`;

// render navigation bar in navigation element in html page
var navigation = document.getElementById("navigation");
navigation.innerHTML += ui.navigation;

// module for create account
ui.createAccount = `
  <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">Create Account</div>
      <div class="card-body">
        Name:<br>
        <input type="input" class="form-control" id="name" placeholder="Enter name"><br>
        Email Address:<br>
        <input type="input" class="form-control" id="email" placeholder="Enter email"><br>
        Password:<br>
        <input type="password" class="form-control" id="password" placeholder="Enter password"><br>
        <button type="submit" id="submit" class="btn" onclick="create()">Create Account</button>
        <br>
        <div id="createStatus"></div>
      </div>
  </div>
`;

// module for login
ui.login = `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
      <div class="card-header">Login</div>
      <div class="card-body">
        Email<br>
        <input type="input" class="form-control" id="loginEmail" placeholder="Enter email"><br>
        Password<br>
        <input type="password" class="form-control" id="loginPassword" placeholder="Enter password"><br>
        <button type="submit" id="submit" class="btn" onclick="login()">Login</button>
        <div id="loginStatus"></div>
      </div>
  </div>
`;

// module for deposit
ui.deposit = `
    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
      <div class="card-header">Deposit</div>
      <div class="card-body">
        Email<br>
        <input type="input" class="form-control" id="depositEmail" placeholder="Enter email"><br>
        Amount<br>
        <input type="number" class="form-control" id="depositAmount" placeholder="Enter amount"><br>
        <button type="submit" class="btn" onclick="deposit()">Deposit</button>
        <div id="depositStatus"></div>
      </div>
  </div>
`;

// module for withdraw
ui.withdraw = `
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
      <div class="card-header">Withdraw</div>
      <div class="card-body">
        Email<br>
        <input type="input" class="form-control" id="withdrawEmail" placeholder="Enter email"><br>
        Amount<br>
        <input type="number" class="form-control" id="withdrawAmount" placeholder="Enter amount"><br>
        <button type="submit" class="btn" onclick="withdraw()">Submit</button>
        <div id="withdrawStatus"></div>
      </div>
  </div>
`;

// module for balance
ui.balance = `
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
      <div class="card-header">Balance</div>
      <div class="card-body">
        Email<br>
        <input type="input" class="form-control" id="balanceEmail" placeholder="Enter email"><br>
        <button type="submit" class="btn" onclick="balance()">Show balance</button>
        <div id="balanceStatus"></div>
      </div>
  </div>
`;

// module for default
ui.default = `
    <div class="card bg-light mb-3" style="max-width: 60rem;">
      <div class="card-header">Our History</div>
      <div class="card-body">
        <h5 class="card-title">Army Federal Credit Union</h5>
        <p class="card-text">Founded in 2013 in Columbia, SC, the Army Federal Credit Union has since etched a remarkable history of dedicated service. With a mission to cater exclusively to service members, it emerged as a beacon of financial stability and support for military personnel. From its humble origins, the credit union rapidly expanded its reach, offering a spectrum of high-quality banking services tailored to the unique needs of servicemen and women. Through unwavering commitment and a customer-centric approach, the Army Federal Credit Union has not only established itself as a trusted financial institution but has also played a pivotal role in enhancing the financial well-being of those who serve their country.</p>
        <img src="./Photos/iStock-Stock_bank-XL.jpg" class="img-fluid" alt="Responsive image">
      </div>
  </div>
`;

// module for allData
ui.allData = `
    <h5>All Data in Store</h5>
    <button type="button" class="btn btn-secondary" onclick="allData()">Show All Data</button>
    <div id="allDataStatus"></div>
`;


// defining functions that will be called by onclick events
var loadCreateAccount = function () {
    target.innerHTML = ui.createAccount;
    title.innerHTML = "Create Account";
};

var loadLogin = function () {
    target.innerHTML = ui.login;
    title.innerHTML = "Login";
};

var loadDeposit = function () {
    target.innerHTML = ui.deposit;
    title.innerHTML = "Deposit";
};

var loadWithdraw = function () {
    target.innerHTML = ui.withdraw;
    title.innerHTML = "Withdraw";
};

var loadBalance = function () {
    target.innerHTML = ui.balance;
    title.innerHTML = "Balance";
};

var loadAllData = function () {
    target.innerHTML = ui.allData;
    title.innerHTML = "All Data";
};

var defaultModule = function () {
    target.innerHTML = ui.default;
    title.innerHTML = "AFCU Bank";
}

defaultModule();