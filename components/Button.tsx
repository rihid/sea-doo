import Image from "next/image";
import Icon from "./Icon";

type ButtonProps = {
    type: 'button' | 'submit';
    label?: string;
    children?: React.ReactNode;
}

function Button({type, label, children}: ButtonProps) {
    return (
        <button
            type={type}
            className="inline-flex justify-center items-center py-3 px-5 text-center text-base font-medium text-white rounded-lg bg-[#FC7300] hover:bg-[#FF5B00]"
        >
            {label ? label : children}
        </button>
    )
}

export default Button