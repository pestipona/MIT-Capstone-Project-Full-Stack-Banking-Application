// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqHp7YUuLlUXKGTgJ5_r_kxjn93iVEKeI",
    authDomain: "afcu-bank-2b374.firebaseapp.com",
    projectId: "afcu-bank-2b374",
    storageBucket: "afcu-bank-2b374.appspot.com",
    messagingSenderId: "473035458107",
    appId: "1:473035458107:web:66a43b1fa42b99efa33e1e",
    measurementId: "G-X3VTNHS4RC"
};

function Spa() {
    return (
        <HashRouter>
            <div>
                <NavBar/>
                <div className="container" style={{padding: "20px"}}>
                    <Route path="/"                 exact component={Home} />
                    <Route path="/CreateAccount/"   component={CreateAccount} />
                    <Route path="/login/"           component={Login} />
                    <Route path="/logout/"          component={Logout} />
                    <Route path="/deposit/"         component={Deposit} />
                    <Route path="/withdraw/"        component={Withdraw} />
                    <Route path="/balance/"         component={Balance} />
                    <Route path="/alldata/"         component={AllData} />
                </div>
            </div>
        </HashRouter>
    );
}

ReactDOM.render(<Spa/>,
    document.getElementById('root')
);