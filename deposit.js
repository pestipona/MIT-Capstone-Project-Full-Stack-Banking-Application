function Deposit(){

    // create variable for user context:
    const ctx = React.useContext(UserContext);

    // get variables for current user:
    let arrayLength = ctx.users.length;     // get array length
    let currentIndex = arrayLength - 1;     // get index of current user
    let currentUser = ctx.users.at(currentIndex).name;  // get name of current user
    let currentBalance = ctx.users.at(currentIndex).balance // get balance of current user

    // for troubleshooting and testing
    console.log(`current user : ${currentUser}`)
    console.log(`current balance : ${currentBalance}`)

    // create react state variables
    const [show, setShow]         = React.useState(true);
    const [deposit, setDeposit]   = React.useState('');
    const [status, setStatus]     = React.useState();
    const [user, setUser]         = React.useState(currentUser);
    const [balance, setBalance]   = React.useState(currentBalance);


    // input validation
    function validate(field) {

        if (!field) {
            setStatus('Error: Please provide a monetary amount.');
            setTimeout(() => setStatus(''), 3000);
            setDeposit('');
            return false;
        }
        else if (field < 0) {
            setStatus('Error: Negative Deposit amount.');
            setTimeout(() => setStatus(''), 3000);
            setDeposit('');
            return false;
        }
        else if (field == 0) {
            setStatus('Error: Amount entered is 0.');
            setTimeout(() => setStatus(''), 3000);
            setDeposit('');
            return false;
        }
        else if (isNaN(field)) {
            setStatus('Error: Not A Number.');
            setTimeout(() => setStatus(''), 3000);
            setDeposit('');
            return false;
        }
        return true;
    }

    // This function performs input validation on the deposit amount
    // This function handles the updating of the current user's balance
    function handleDeposit() {

        if (!validate(deposit)) return;

        let stringBalance = parseFloat(balance).toFixed(2);
        let numBalance = parseFloat(stringBalance);

        let stringDeposit = parseFloat(deposit).toFixed(2);
        let numDeposit = parseFloat(stringDeposit);

        let newBalance = numBalance + numDeposit;
        newBalance = parseFloat(newBalance).toFixed(2);

        setBalance(newBalance);
        setShow(false);

        // update current user's balance
        ctx.users.at(currentIndex).balance = newBalance;
        // for troubleshooting and testing
        console.log(`Deposit Amount: $${deposit}`, `New Balance: $${newBalance}`);

    }

    function clearForm() {
        setDeposit('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="success"
            txtcolor="black"
            header="Deposit"
            status={status}
            body={show ? (
                <>
                    Balance: ${balance}<br/><br/>
                    Deposit Amount:<br/>
                    <input type="input" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" disabled={!deposit} onClick={handleDeposit}>Deposit</button>
                </>
            ):(
                <>
                    <h5>Deposit Successful</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Add another deposit</button>
                </>
            )}
        />
    );
}