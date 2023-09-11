function NavBar(){

    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    React.useEffect(() => {
        // Check if the user is authenticated
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false);
            }
        });

        // Cleanup
        return () => unsubscribe();
    }, []);

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">AFCU</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    { !isAuthenticated && (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="#/CreateAccount/">Create Account</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/login/">Login</a>
                            </li>
                        </>
                    )}
                    { isAuthenticated && (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="#/logout/">Logout</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/deposit/">Deposit</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/withdraw/">Withdraw</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/balance/">Balance</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#/alldata/">AllData</a>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}