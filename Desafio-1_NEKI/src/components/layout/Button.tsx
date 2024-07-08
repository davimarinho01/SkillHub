import styles from './css/Button.module.css';

interface buttonProps{
    text: string,
    link?: string
}


export default function Button({text, link}:buttonProps){
    return(
        <a href={link}><button type="submit" className={styles.btn}>{text}</button></a>
    )
}