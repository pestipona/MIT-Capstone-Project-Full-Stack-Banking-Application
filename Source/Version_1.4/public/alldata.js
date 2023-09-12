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

function AllData() {

    // Initialize state to store the fetched data
    const [data, setData] = React.useState([]);
    const [errorMessage, setErrorMessage] = React.useState(null);

    React.useEffect(() => {

        // Fetch data when component mounts
        const fetchData = async () => {

            try {
                const idToken = await firebase.auth().currentUser.getIdToken();
                console.log('current user\'s idToken:', idToken);

                let response = await fetch('/account/all', {
                    method: 'GET',
                    headers: {
                        'Authorization': idToken
                    }
                });

                if (response.ok && response.headers.get('content-type').includes('application/json')) {
                    let jsonData = await response.json();
                    setData(jsonData); // Assuming the response is an array
                } else {
                    let errorMsg = await response.text();
                    console.error('Failed to fetch or not a JSON response:', errorMsg);
                    setErrorMessage(errorMsg);
                }
            } catch (e) {
                console.error('Error fetching data:', e);
                setErrorMessage(e.message);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run once when the component mounts

    return (
        <div className="container">

            {/* Display the error message if there is one */}
            { errorMessage ? (
                <div className="alert alert-danger" role="alert">{errorMessage}</div>
            ) : (
                <>
                    <h1 className="text text-primary text-center">Armed Forces Credit Union Bank Data</h1>
                    <h6 className="text text-primary text-center">User Account Information</h6>
                    <table className="table table-striped table-bordered">
                        <colgroup className="text-center">
                            <col width="25%" />
                            <col width="25%" />
                            <col width="25%" />
                            <col width="25%" />
                        </colgroup>
                        <thead className="table-primary">
                        <tr>
                            <th scope="col" data-field="id" className="text-primary">Account ID</th>
                            <th scope="col" data-field="name" className="text-primary">Name</th>
                            <th scope="col" data-field="email" className="text-primary">Email</th>
                            <th scope="col" data-field="balance" className="text-primary">Balance</th>
                        </tr>
                        </thead>
                        <tbody id="table-body">
                        {data.map((value, index) => (
                            <tr key={index}>
                                <td className="text-left">{index}</td>
                                <td className="text-left">{value.name}</td>
                                <td className="text-left">{value.email}</td>
                                <td className="text-right">{`$ ${parseFloat(value.balance).toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}`}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}