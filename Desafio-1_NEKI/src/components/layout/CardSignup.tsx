import Button from "./Button";
import { Input } from "./Input";
import styles from "./css/CardSignup.module.css";
import {useState, useEffect } from "react";

export const CardSignup = () => {

        const [inputType, setInputType] = useState('password');

        const alterarType = () => {
            if(inputType === 'text') setInputType('password');
            if(inputType === 'password') setInputType('text');
            
        }

    return(
        <div className={styles.card}>
            <h2>Faça seu cadastro!</h2>
            <div className={styles.username}>
                <Input 
                    type="text"
                    placeholder="Digite seu nome"
                    name="name"
                    text="Nome:"
                />
             </div> 
            <div className={styles.username}>
                <Input 
                    type="text"
                    placeholder="Digite seu email"
                    name="username"
                    text="E-mail:"
                />
             </div>   
            <div className={styles.pass}>
                <Input 
                    type={inputType}
                    placeholder="Digite sua senha"
                    name="password"
                    text="Senha:"
                />
                <button className={styles.reveal} onClick={alterarType}>Mostrar Senha</button>
            </div>
            <div className={styles.savePassword}>
                <input type="checkbox"></input>
                <label>Salvar senha</label>
            </div>
            <div className={styles.btn}>
                <Button text="Cadastrar" link="/login"/>
            </div>
        </div>
    )
}