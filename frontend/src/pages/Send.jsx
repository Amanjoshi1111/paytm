import { useSearchParams } from "react-router-dom";
import SendMoney from "../components/SendMoney";

export default function Send(){
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    const name = searchParams.get('name');

    return <div className="flex flex-column justify-center items-center h-screen">
         <div className="w-1/3 border border-1 border-gray-300 rounded-md p-4 shadow-2xl">
        <SendMoney name={name} id={id}/>
    </div>
    </div>
   
}