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

function Balance(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [balance, setBalance] = React.useState('');

    return (
        <Card
            bgcolor="info"
            header="Balance"
            status={status}
            body={show ?
                <BalanceForm setShow={setShow} setStatus={setStatus} setBalance={setBalance}/> :
                <BalanceMsg setShow={setShow} balance={balance}/>}
        />
    )

}

function BalanceMsg(props){

    return(<>
        <h5>Your Current Balance: ${parseFloat(props.balance).toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })}</h5>
        <button type="submit"
                className="btn btn-light"
                onClick={() => props.setShow(true)}>
            Check balance again
        </button>
    </>);
}

function BalanceForm(props){

    const [email, setEmail]   = React.useState('');

    function handle(){

        // Validation passed, proceed with the fetch
        const url = `/account/balance/${email}`;
        (async () => {

            try {
                var res = await fetch(url);
                var user = await res.json();
                props.setBalance(user.balance);
                props.setStatus('');
                props.setShow(false);
            } catch (error) {
                props.setShow(false);
            }
        })();
    }

    return (<>

        Email<br/>
        <input type="input"
               className="form-control"
               placeholder="Enter email"
               value={email}
               onChange={e => setEmail(e.currentTarget.value)}/><br/>

        <button type="submit"
                className="btn btn-light"
                onClick={handle}>
            Check Balance
        </button>

    </>);
}