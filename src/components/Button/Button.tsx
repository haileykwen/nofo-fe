import "./Button.css";

interface ButtonProps {
    label: string
    onClick?: any
    className?: string
    full?: boolean
};

const Button = (props: ButtonProps) => {
    return (
        <button 
            className={`
                button 
                ${props.full ? "w-full" : "w-max"}
                ${props.className && props.className}
            `} 
            onClick={props.onClick}
        >
            <p className="button-label">{props.label}</p>
        </button>
    );
};

export default Button;