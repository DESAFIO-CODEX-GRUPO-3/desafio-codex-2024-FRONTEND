import './styles.css';

interface InputProps {
    inputLabel: string;
    placeholder: string;
    type: string;
    value: string | number;
    changeHandler: (value: string) => void;
}

export default function Input({ inputLabel, placeholder, value, type, changeHandler }: InputProps) {
    return (
        <div className='input-container'>
            <label className='ourLabel' htmlFor="fullNameInput">{inputLabel}</label>
            <input
            className='ourInput'
            type={type} id='fullNameInput'
            placeholder={placeholder}
            onChange={(event) => changeHandler(event.target.value)}
            value={value}
            />
        </div>
    )
}