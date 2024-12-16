import axios from "axios";
import { useState } from "react";
import BottomWarning from "../components/BottomWarning";
import Button from "../components/Buttons";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import { httpInstance } from "../axios";

export default function SingUp() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function onButtonClick() {
        try {
            const response = await httpInstance.request({
                url: "/signup",
                method: "POST",
                data: {
                    firstName,
                    lastName,
                    username,
                    password
                }
            })
            
            console.log("Token ", response.data.token);
            localStorage.setItem('paytm-token', response.data.token);

        } catch (err) {
            if(err.response){
                console.log("Server responded with : ", err.response.data);
            }
            console.log("ERROR SENDING REQUEST : ", err.message);
        }
    }

    const onChange = (fun) => (e) => fun(e.target.value);

    return <div className="flex justify-center items-center min-h-screen">
        <div className="p-5 rounded-lg border-solid border-2 border-black w-1/3 text-center">
            <div className="pb-3">
                <Heading title={"Sign Up"} />
                <SubHeading title={"Enter your information to create an account"} />
            </div>
            <InputBox onChange={onChange(setFirstName)} inputTitle="First Name" type="text" placeholder={"Aman"} />
            <InputBox onChange={onChange(setLastName)} inputTitle="Last Name" type="text" placeholder={"Joshi"} />
            <InputBox onChange={onChange(setUsername)} inputTitle="Username" type="text" placeholder={"amanjoshi"} />
            <InputBox onChange={onChange(setPassword)} inputTitle="Password" type="password" placeholder={"123456"} />

            <Button title={"Sign Up"} onClick={onButtonClick}></Button>
            <BottomWarning title={"Already have an account? "} buttonText={"Login"} to={"/login"} />
        </div>
    </div>

}