export default function InputBox({ inputTitle, type, placeholder, onChange }) {
    return <div className="pb-3">
        <div className="text-base font-semibold text-left">{inputTitle}</div>
        <input type={type} onChange={onChange} placeholder={placeholder} className="w-full h-10 px-2 border rounded-md border-gray-200 hover:border-gray-400 focus:outline-none focus:border-gray-700" />
    </div>
}