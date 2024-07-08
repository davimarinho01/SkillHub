import { useState } from "react"
import { Navigate } from "react-router-dom";
import { CardLogin } from "../layout/CardLogin";
import styles from './css/login.module.css';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        fetch("http://localhost:8080/SkillHub")
        .then(response => {
            console.log('Response status:', response.status); // Log do status da resposta
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Chamada correta da função json()
        })
        .then(data => {
            console.log(data);
        })
    }


    return (
        <div className={styles.container}>
            <CardLogin />
        </div>
    )
}