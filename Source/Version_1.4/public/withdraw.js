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

function Withdraw(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');

    return (
        <Card
            bgcolor="success"
            header="Withdraw"
            status={status}
            body={show ?
                <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
                <WithdrawMsg setShow={setShow}/>}
        />
    )
}

function WithdrawMsg(props){
    return(<>
        <h5>Success</h5>
        <button type="submit"
                className="btn btn-light"
                onClick={() => props.setShow(true)}>
            Withdraw again
        </button>
    </>);
}

function WithdrawForm(props){

    const [email, setEmail]   = React.useState('');
    const [amount, setAmount] = React.useState('');

    function handle(){

        // Validation passed, proceed with the fetch
        const url = `/account/withdraw/${email}/${amount}`;
        (async () => {

            try {
                var res = await fetch(url);
                var user = await res.json();
                console.log('Balance Updated Successfully. New Balance: $', user.balance);
                props.setStatus('');
                props.setShow(false);
            } catch (error) {
                props.setShow(false);
            }
        })();
    }


    return(<>

        Email<br/>
        <input type="input"
               className="form-control"
               placeholder="Enter email"
               value={email}
               onChange={e => setEmail(e.currentTarget.value)}/><br/>

        Amount<br/>
        <input type="number"
               className="form-control"
               placeholder="Enter amount"
               value={amount}
               onChange={e => setAmount(e.currentTarget.value)}/><br/>

        <button type="submit"
                className="btn btn-light"
                onClick={handle}>
            Withdraw
        </button>

    </>);
}
