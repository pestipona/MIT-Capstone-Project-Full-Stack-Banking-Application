function Spa() {
    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'Abel Sanchez',email:'abel@mit.edu',password:'password',balance:1000}]}}>
                <Route path="/" exact           component={Home} />
                <Route path="/CreateAccount/"   component={CreateAccount} />
                <Route path="/deposit/"         component={Deposit} />
                <Route path="/withdraw/"        component={Withdraw} />
                <Route path="/alldata/"         component={AllData} />
            </UserContext.Provider>
        </HashRouter>
    );
}

ReactDOM.render(<Spa/>, document.getElementById('root'));