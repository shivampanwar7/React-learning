
import Card from "../layouts/Card/card";
import Table from "../components/Table/Table";

function HomePage(props){
    const UserData = JSON.parse(localStorage.getItem("UserData"));
    return <Card>
        <h1>Welcome {UserData['name']['name']}</h1>
        <Table />
    </Card>

}

export default HomePage