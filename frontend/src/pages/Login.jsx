import BottomWarning from "../components/BottomWarning";
import Button from "../components/Buttons";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

export default function Login() {
    return <div className="flex justify-center items-center min-h-screen">
        <div className="p-5 rounded-lg border-solid border-2 border-black w-1/3 text-center">
            <div className="pb-3">
            <Heading title={"Login"} />
            <SubHeading title={"Enter your credentials to access the account"} />
            </div>
            <InputBox inputTitle="Username" type="text" placeholder={"amanjoshi"} />
            <InputBox inputTitle="Password" type="password" placeholder={"123456"} />
            <Button title={"Sign Up"}></Button>
            <BottomWarning title={"Don't have any account? "} buttonText={"Sign Up"} to={"/signup"}/>
        </div>
    </div>
}