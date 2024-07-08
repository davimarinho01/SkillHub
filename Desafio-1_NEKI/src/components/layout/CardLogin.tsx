import Button from "./Button";
import { Input } from "./Input";
import styles from "./css/CardLogin.module.css";
import {useState } from "react";


export const CardLogin = () => {

        const [inputType, setInputType] = useState('password');

        const alterarType = () => {
            if(inputType === 'text') setInputType('password');
            if(inputType === 'password') setInputType('text');
            
        }
    return(
        <div className={styles.card}>
            <h2>Faça seu Login</h2>
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
                <input type="checkbox" id="check"></input>
                <label>Salvar senha</label>
            </div>
            <div className={styles.btn}>
                <Button text="Acessar" link="/dashboard" />
            </div>
            <div className={styles.cadastro}>
                <p>Não tem uma conta?</p>
                <Button text="Cadastre-se aqui!" link="/signup"/>
            </div>
        </div>
    )
}