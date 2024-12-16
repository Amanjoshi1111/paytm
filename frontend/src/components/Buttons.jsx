export default function Button({title, onClick}){
    return <>
        <button onClick={onClick} className="w-full h-10 bg-auth-button text-white text-base font-semibold rounded-md">{title}</button>
    </>
}

export  function ButtonGreen({title, onClick}){
    return <>
        <button onClick={onClick} className="w-full h-10 bg-green-500 text-white text-base font-semibold rounded-md">{title}</button>
    </>
}