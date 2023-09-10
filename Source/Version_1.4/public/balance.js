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
    //const [balance, setBalance] = React.useState('');

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