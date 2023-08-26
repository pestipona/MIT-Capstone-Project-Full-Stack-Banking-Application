function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#" data-toggle="tooltip" data-placement="bottom" title="Home Page">BadBank</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link nav-highlight" href="#/CreateAccount/" data-toggle="tooltip" data-placement="bottom" title="Create Account Page">Create Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-highlight" href="#/deposit/" data-toggle="tooltip" data-placement="bottom" title="Deposit Page">Deposit</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-highlight" href="#/withdraw/" data-toggle="tooltip" data-placement="bottom" title="Withdraw Page">Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-highlight" href="#/alldata/" data-toggle="tooltip" data-placement="bottom" title="All Data Page">AllData</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}