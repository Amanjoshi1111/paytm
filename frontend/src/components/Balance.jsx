export default function Balance({balance}){
    return <div className="flex justify-between w-52">
        <div>Your Balance </div>
        <div>Rs {balance}</div>
    </div>
}