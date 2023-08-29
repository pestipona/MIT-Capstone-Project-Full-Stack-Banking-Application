function CreateAccount() {

    const ctx = React.useContext(UserContext);

    // get variables for current user:
    let arrayLength = ctx.users.length;     // get array length
    let currentIndex = arrayLength - 1;     // get index of current user
    let currentUser = ctx.users.at(currentIndex).name;  // get name of current user

    // for troubleshooting and testing
    console.log(`current user : ${currentUser}`)

    // create react state variables
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState();
    const [name, setName]         = React.useState();
    const [email, setEmail]       = React.useState();
    const [password, setPassword] = React.useState();

    // validate empty fields
    function validateEmptyField(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    // validate password length
    function validatePasswordLength(field, label) {
        if (field.length < 8) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    // handles creation of new user account
    function handleCreate() {
        // for troubleshooting and testing
        console.log(`user: ${name}, email: ${email}, password: ${password}`);

        if (!validateEmptyField(name, 'Please enter a name')) return;
        if (!validateEmptyField(email, 'Please enter an email')) return;
        if (!validateEmptyField(password, 'Please enter a password')) return;
        if (!validatePasswordLength(password, 'Password is less than 8 characters long.')) return;

        // add new user to array list
        ctx.users.push({name, email, password, balance:0});
        setShow(false);
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="primary"
            txtcolor="black"
            header="Create Account"
            status={status}
            body={show ? (
                <>
                    Name<br/>
                    <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password<br/>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" disabled={!name && !email && !password} onClick={handleCreate}>Create Account</button>
                </>
            ):(
                <>
                    <h5>Success</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
                </>
            )}
        />
    )
}