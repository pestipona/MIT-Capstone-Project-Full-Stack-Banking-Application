/*
function AllData() {
    const ctx = React.useContext(UserContext);
    return(
        <>
        <h1>AllData Component</h1>
        {JSON.stringify(ctx)}
        </>
    );
}*/

function AllData() {
    const [data, setData] = React.useState('');

    React.useEffect(() => {

        // fetch all accounts from backend API route
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));
            });
    }, []);

    return(<>
        <h5>All Data in Store:</h5>
        {data}
    </>);
}