import video from '../../img/home.mp4';
import Button from '../layout/Button';
import styles from './css/home.module.css';
export const Home = () => {
    return (
        <div className={styles.main}>
            <video src={video} autoPlay muted />
            {/* <div className={styles.content}>
                <div>
                    <h1>SkillHub</h1>
                </div>
                <div className={styles.btn}>
                    <Button text='Login'/>
                    <Button text='Cadastre-se'/>
                </div>
            </div> */}
        </div>
    )
}