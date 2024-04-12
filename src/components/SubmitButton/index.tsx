import './styles.css';

interface SubmitButtonI{
    innerText: string
}

export default function SubmitButton({ innerText }: SubmitButtonI) {
    return <button className='our-submit-button' type='submit'>
        {innerText}
    </button>
}