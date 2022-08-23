import "./TextInput.css";

interface TextInputProps {
    type?: "text" | "password"
    id: string
    name: string
    required?: boolean
    className?: string
    onChange: any
    label?: string
};

const TextInput = (props: TextInputProps) => {
    return (
        <div className="textinput-wrapper">
            {props.label && <label htmlFor="email" className="textinput-label">{props.label}</label>}
            <input
                type={props.type ? props.type : "text"}
                id={props.id}
                name={props.name}
                required={props.required ? props.required : false}
                className="textinput-input"
                onChange={props.onChange}
            />
        </div>
    );
};

export default TextInput;