const columns = [
    { dataField: 'name', text: 'Name' },
    { dataField: 'email', text: 'Email' },
    { dataField: 'password', text: 'Password' },
    { dataField: 'balance', text: 'Balance' },
];

const TableComponent = () => {
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        setTableData(jsonData);
    }, []);

    return (
        <BootstrapTable keyField="name" data={tableData} columns={columns} />
    );
};