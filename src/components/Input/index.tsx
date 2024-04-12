import './styles.css';

interface InputProps {
    inputLabel: string
    placeholder: string
    type: string
}

export default function Input({ inputLabel, placeholder, type }: InputProps) {
    return (
        <div className='input-container'>
            <label className='ourLabel' htmlFor="fullNameInput">{inputLabel}</label>
            <input className='ourInput' type={type} id='fullNameInput' placeholder={placeholder} />
        </div>
    )
}