import InputBox from "./InputBox";
import Button from "./Buttons";
import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { httpInstance } from "../axios";

export default function Users(){

    const [balance, setBalance] = useState(0);  //Get user balance from backend
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(()=> {
        httpInstance({
            url: "/user/bulk",
            method: "GET",
            headers: {
                Authorization: `bearer ${localStorage.getItem('paytm-token')}`
            }
        }).then((userList)=>{
            const users = userList.data.users;
            console.log(users);
            setUsers(()=> users);
        });
    }, []);



    return <div className="py-3">
        <InputBox onChange={(e)=>{
            setFilter(e.target.value);
        }} inputTitle={"Users"} type={"text"} placeholder={"Search users..."}></InputBox>
        {
            users.filter((data)=> {
                return data.firstName.toLowerCase().includes(filter);
            })
            .map((data)=> <UserListEntry user={data} key={data._id}/>)
        }
    </div>
}

function UserListEntry({user}){

    const navigator = useNavigate();
    const userInitials = user.firstName[0].toUpperCase();
    
    return <>
    <div className="flex justify-between pa-2 pb-2">
            <div className="flex justify-between items-center">
                <div className="flex justify-center items-center w-9 h-9 border border-2 border-transparent rounded-full bg-gray-500 text-white mr-3">{userInitials}</div>
                <div className="text-left truncate w-40">{user.firstName} {user.lastName}</div>
            </div>
            <div className="w-28">
            <Button onClick={(e)=>{
                navigator(`/send?id=${user._id}&name=${user.firstName} ${user.lastName}`);
            }} title={"Send Money"}></Button>
            </div>
        </div>
    </>
}