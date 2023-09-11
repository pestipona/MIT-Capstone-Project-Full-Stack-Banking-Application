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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Login(){

    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');

    return (
        <Card
            bgcolor="secondary"
            header="Login"
            status={status}
            body={show ?
                <LoginForm setShow={setShow} setStatus={setStatus}/> :
                <LogoutForm setShow={setShow} setStatus={setStatus}/>}
        />
    )
}

function LogoutForm(props){

    function handle() {
        //Uses the Firebase Authentication service to sign out the currently authenticated user
        firebase.auth().signOut();
        props.setShow(true)
    }


    return(<>

        <h6>Logged in successfully</h6>

        <button id="logout"
                type="submit"
                className="btn btn-light"
                onClick={handle}>Log Out</button>
    </>);
}

function LoginForm(props){

    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');

    function handle(){

        // Clearing the status when attempting to log in
        props.setStatus('');

        // This attempts to authenticate the user in firebase using the provided email and password.
        // The method signInWithEmailAndPassword returns a promise.
        // If the sign-in is successful, the promise resolves; if not, it rejects.
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Sign in successful, update the UI accordingly
                // props.setStatus('Logged in successfully');
                props.setShow(false);
            })
            .catch((error) => {
                // Handle errors here, such as displaying a message to the user
                console.error('Error logging in: ', error.message);
                props.setStatus(error.message);
            });
    }

    return (<>

        Email<br/>
        <input id="email"
               type="input"
               className="form-control"
               placeholder="Enter email"
               value={email}
               onChange={e => setEmail(e.currentTarget.value)}/><br/>

        Password<br/>
        <input id="password"
               type="password"
               className="form-control"
               placeholder="Enter password"
               value={password}
               onChange={e => setPassword(e.currentTarget.value)}/><br/>

        <button id="login"
                type="submit"
                className="btn btn-light"
                onClick={handle}>Login</button>

    </>);
}