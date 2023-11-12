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
            className="inline-flex gap-1 justify-center items-center bg-firstColor px-8 py-4 font-semibold text-whiteColor duration-300 hover:bg-firstColorAlt"
        >
            {label ? label : children}
        </button>
    )
}

export default Button