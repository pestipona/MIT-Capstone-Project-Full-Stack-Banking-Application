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

function CreateAccount(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');

    return (
        <Card
            bgcolor="primary"
            header="Create Account"
            status={status}
            body={show ?
                <CreateForm setShow={setShow} setStatus={setStatus}/> :
                <CreateMsg setShow={setShow} setStatus={setStatus}/>
            }
        />
    )
}

function CreateMsg(props){
    return(<>
        <h5>Success</h5>
        <button type="submit"
                className="btn btn-light"
                onClick={() => props.setShow(true)}>Add another account</button>
    </>);
}

function CreateForm(props){

    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const [balance, setBalance]   = React.useState('');

    function handle() {

        // Clearing the status when attempting to create again
        props.setStatus('');

        // Validation passed, proceed with the fetch
        console.log(name, email, password, balance);

        // This attempts to create the user in firebase using the provided email and password.
        // The method createUserWithEmailAndPassword returns a promise.
        // If the creation is successful, the promise resolves; if not, it rejects.
        firebase.auth().createUserWithEmailAndPassword(String(email), String(password))
            .then((userCredential) => {

                // create entry in mongoDB
                const url = `/account/create/${name}/${email}/${password}/${balance}`;
                (async () => {
                    var res = await fetch(url);
                    var data = await res.json();
                    console.log(data);
                })();

                // Log out the user after successful account creation
                firebase.auth().signOut().then(() => {
                    console.log('User signed out after account creation');
                    props.setStatus('Account created successfully, but you are not logged in.');
                }).catch((error) => {
                    console.error('Error signing out after account creation:', error);
                    props.setStatus('Account created, but encountered an error during sign out.');
                });

                // creation successful, update the UI accordingly
                props.setShow(false);
            })
            .catch((error) => {
                // Handle errors here, such as displaying a message to the user
                console.error('Error logging in: ', error.message);
                props.setStatus(error.message);
            });
    }

    return (<>

        Name:<br/>
        <input type="input"
               className="form-control"
               placeholder="Enter name"
               value={name}
               onChange={e => setName(e.currentTarget.value)} /><br/>

        Email Address:<br/>
        <input type="input"
               className="form-control"
               placeholder="Enter email"
               value={email}
               onChange={e => setEmail(e.currentTarget.value)}/><br/>

        Password:<br/>
        <input type="password"
               className="form-control"
               placeholder="Enter password"
               value={password}
               onChange={e => setPassword(e.currentTarget.value)}/><br/>

        Starting Balance:<br/>
        <input type="input"
               className="form-control"
               placeholder="Enter Balance"
               value={balance}
               onChange={e => setBalance(e.currentTarget.value)}/><br/>

        <button type="submit"
                className="btn btn-light"
                disabled={!name && !email && !password}
                onClick={handle}>Create Account</button>

    </>);
}