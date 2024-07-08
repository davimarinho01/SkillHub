import styles from './css/Input.module.css'

interface inputProps {
    type: string;
    placeholder?: string
    name?: string;
    value?: string;
    text: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({type, placeholder, name, value, onChange, text}: inputProps) => {

    return(
        <div className={styles.inputContainer}>
            <div className={styles.inputs}>
                <label className={styles.lb} >{text}</label>
                <input className={styles.inp} type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required/>
            </div>
        </div>
    )
}