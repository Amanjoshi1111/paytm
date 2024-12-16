import { Link } from "react-router-dom";

export default function BottomWarning({title, buttonText, to}){
    return <div className="pt-3">
        <div>{title}<Link to={to}><span className="underline">{buttonText}</span></Link></div>
    </div>
}