function AllData() {

    // Initialize state to store the fetched data
    const [data, setData] = React.useState([]);

    // Use useEffect to fetch data when the component mounts
    React.useEffect(() => {

        async function fetchData() {

            // Get the current user's Firebase ID token.
            const user = firebase.auth().currentUser;
            let idToken = null;
            if (user) {
                idToken = await user.getIdToken(true);  // The true flag forces a refresh of the token.
            }

            // Attach the ID token to the request headers.
            const headers = new Headers();
            if (idToken) {
                headers.append('Authorization', 'Bearer ' + idToken);
            }

            // Make a GET request to the API endpoint with headers
            fetch('/account/all', { headers: headers })
                .then(response => response.json())
                .then(result => {
                    console.log(result);
                    // Set the fetched data in the component's state
                    setData(result);
                });
        }

    }, []);  // The empty dependency array ensures this effect runs once on mount

    return(<>
        <div className="container">
            <h1 className="text text-primary text-center ">Armed Forces Credit Union Bank Data</h1>
            <h6 className="text text-primary text-center">User Account Information</h6>
            <table className="table table-striped table-bordered" >
                <colgroup className="text-center">
                    <col width="20%"/>
                    <col width="20%"/>
                    <col width="20%"/>
                    <col width="20%"/>
                    <col width="20%"/>
                </colgroup>
                <thead className="table-primary">
                <tr>
                    <th scope="col" data-field="id"   className="text-primary">Account ID</th>
                    <th scope="col" data-field="name" className="text-primary">Name</th>
                    <th scope="col" data-field="date" className="text-primary">Email</th>
                    <th scope="col" data-field="date" className="text-primary">Password</th>
                    <th scope="col" data-field="date" className="text-primary">Balance</th>
                </tr>
                </thead>
                <tbody id="table-body" >
                    {data.map((value, index) => (
                        <tr key={index}>
                            <td className="text-left">{index}</td>
                            <td className="text-left">{value.name}</td>
                            <td className="text-left">{value.email}</td>
                            <td className="text-left">{value.password}</td>
                            <td className="text-right">{`$ ${parseFloat(value.balance).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                            })}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>);
}