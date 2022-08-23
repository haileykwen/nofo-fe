import "./Button.css";

interface ButtonProps {
    label: string
    onClick: any
    className?: string
};

const Button = (props: ButtonProps) => {
    return (
        <button className={`button ${props.className && props.className}`} onClick={props.onClick}>
            <p className="button-label">{props.label}</p>
        </button>
    );
};

export default Button;