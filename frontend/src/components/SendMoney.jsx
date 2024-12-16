import { useState } from "react";
import { httpInstance } from "../axios";
import Button, {ButtonGreen} from "./Buttons";
import InputBox from "./InputBox";

export default function SendMoney({id, name}) {

    const [amount, setAmount] = useState(0);

    return <>
        <div className="text-3xl font-extrabold text-center pt-4 pb-16">Send Money</div>
        <div className="flex items-center pb-1">
            <div className="flex justify-center items-center w-9 h-9 border border-2 border-transparent rounded-full bg-green-500 text-white mr-3">A</div>
            <div className="text-lg font-semibold" >{name.slice(0,1).toUpperCase()+name.slice(1)}</div>
        </div>
        <InputBox onChange={(e)=> {
            setAmount(Number(e.target.value));
        }} inputTitle={"Amount (in Rs)"} type={"number"}  placeholder={"Enter Amount"}/>
       <ButtonGreen title={"Transfer Money"} onClick={async ()=>{
            const resp = await httpInstance.request({
                url: "/account/transfer",
                method: "POST",
                data: {
                    "to": id,
                    amount
                },
                headers: {
                    Authorization: "Bearer "+ localStorage.getItem('paytm-token')
                } 
            })

       }}/>
    </>
}