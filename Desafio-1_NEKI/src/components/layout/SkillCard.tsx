import styles from './css/SkillCard.module.css'

interface skillProps{
    skillName: string,
    skillDescription: string,
    skillLevel?: string,
    skillImage?: string,
    icon: JSX.Element
}

export const SkillCard = ({skillName, skillDescription, skillLevel, skillImage, icon}: skillProps) => {

    

    return(
        <div>
            <div className={styles.card}>
                <div className={styles.skillInfo}>
                    <img src={skillImage} className="card-img-top" alt="skill image"/>
                    <div className={styles.skillTitle}>
                        <h3>{skillName}</h3>
                        <h4>{skillDescription}</h4>
                    </div>
                </div>
                <div className={styles.level}>
                    <h3>{skillLevel}</h3>
                    <h3>{icon}</h3>
                </div>
            </div>
        </div>
    )
}