// Web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAqHp7YUuLlUXKGTgJ5_r_kxjn93iVEKeI",
    authDomain: "afcu-bank-2b374.firebaseapp.com",
    projectId: "afcu-bank-2b374",
    storageBucket: "afcu-bank-2b374.appspot.com",
    messagingSenderId: "473035458107",
    appId: "1:473035458107:web:66a43b1fa42b99efa33e1e",
    measurementId: "G-X3VTNHS4RC"
};

function Deposit(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');

    return (
        <Card
            bgcolor="warning"
            header="Deposit"
            status={status}
            body={show ?
                <DepositForm setShow={setShow} setStatus={setStatus}/> :
                <DepositMsg setShow={setShow}/>}
        />
    )
}

function DepositMsg(props){
    return (<>
        <h5>Success</h5>
        <button type="submit"
                className="btn btn-light"
                onClick={() => props.setShow(true)}>
            Deposit again
        </button>
    </>);
}

function DepositForm(props){

    const [email, setEmail] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState(null);
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    // Check user's authentication status when the component mounts
    React.useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });
    }, []); // The empty dependency array means this useEffect will run once when the component mounts.


    function handle(){

        // Get the current user
        const user = firebase.auth().currentUser;
        if(user) {
            // Get JWT
            user.getIdToken(true).then(async (idToken) => {
                // print to console token for swaggerUI testing
                console.log(idToken);
                // Include the token in the request headers
                const url = `/account/deposit/${email}/${amount}`;
                try {
                    var res = await fetch(url, {
                        headers: {
                            'Authorization': `Bearer ${idToken}`
                        }
                    });
                    var data = await res.json();
                    console.log('Balance Updated Successfully. New Balance: $', data.balance);
                    props.setStatus('');
                    props.setShow(false);
                } catch (error) {
                    setErrorMessage(error);
                    props.setShow(false);
                }
            }).catch((error) => {
                console.error("Error getting the token:", error);
                setErrorMessage(error);
            });
        }
    }

    return (
        <div className="container">
            {errorMessage && (
                <div className="alert alert-danger" role="alert">{errorMessage}</div>
            )}

            {isAuthenticated ? (
                <>
                    Email<br />
                    <input type="input"
                           className="form-control"
                           placeholder="Enter email"
                           value={email} onChange={e => setEmail(e.currentTarget.value)} /><br />

                    Amount<br />
                    <input type="number"
                           className="form-control"
                           placeholder="Enter amount"
                           value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br />

                    <button type="submit"
                            className="btn btn-light"
                            onClick={handle}>Deposit</button>
                </>
            ) : (
                <div>Please log in to access this page.</div>
            )}
        </div>
    );
}