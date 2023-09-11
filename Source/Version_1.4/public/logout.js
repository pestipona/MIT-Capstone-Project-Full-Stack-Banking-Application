function Logout(){

    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');

    return (
        <Card
            bgcolor="secondary"
            header="Logout"
            status={status}
            body={show ?
                <LogoutForm setShow={setShow} setStatus={setStatus}/> :
                <LogoutMsg setShow={setShow} setStatus={setStatus}/>}
        />
    )
}

function LogoutMsg(props){

    return(<>
        <h6>Successfully Logged Out!</h6>
    </>);
}

function LogoutForm(props){

    function handle(){

        //Uses the Firebase Authentication service to sign out the currently authenticated user
        firebase.auth().signOut();
        props.setShow(false);
    }

    return (<>

        <h6>Press button to confirm</h6>

        <button id="logout"
                type="submit"
                className="btn btn-light"
                onClick={handle}>Log Out</button>

    </>);
}