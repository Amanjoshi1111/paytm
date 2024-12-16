import Appbar from "../components/Appbar";
import Balance from "../components/Balance";
import SendMoney from "../components/SendMoney";
import Users from "../components/Users";

export default function Dashboard() {
    return <div className="px-4 ">
        <Appbar />
        <div className="px-4 py-2 text-base font-bold">
            <Balance balance={5000} />
            <Users />
        </div>
    </div>
}