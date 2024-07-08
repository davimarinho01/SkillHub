import { useEffect, useState } from 'react';
import styles from './css/Dashboard.module.css';
import Button from '../layout/Button';
import { SkillCard } from '../layout/SkillCard';
import { FaTrashAlt } from "react-icons/fa";


export const Dashboard = () => {
    const [name, setName] = useState('');
    const [skillName, setSkillName] = useState('');
    const [skillDescription, setSkillDescription] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [image, setImage] = useState('');

  useEffect(() => {

        fetch("http://localhost:8080/SkillHub")
        .then(response => {
            console.log('Response status:', response.status); // Log do status da resposta
            if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Chamada correta da função json()
        })
        .then(data => {
            console.log(data)
            const user = data[0];
            const userName = user.name;
            const skillName = user.skillname;
            const skillDescription = user.description;
            const skillImage = user.image;
            const skillLevel = user.level
            console.log(userName);
            setName(userName);
            setSkillName(skillName);
            setSkillDescription(skillDescription);
            setImage(skillImage);
            setSkillLevel(skillLevel)

        })
        .catch(error => {
            console.error(error);
        });
  }, []);
  

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Olá {name}!</h1>
        <div className={styles.add}>
            <Button 
                text='ADICIONAR SKILL' 
                link='/newskill'
            />
        </div>
      </div>
      <div className={styles.skillCard}>
        <SkillCard 
            skillName={skillName}
            skillDescription={skillDescription}
            skillImage={image}
            skillLevel={skillLevel}
            icon={<FaTrashAlt />}
        />
        <SkillCard 
            skillName={skillName}
            skillDescription={skillDescription}
            skillImage={image}  
            skillLevel={skillLevel}
            icon={<FaTrashAlt />}
        />
        <SkillCard 
            skillName={skillName}
            skillDescription={skillDescription}
            skillImage={image} 
            skillLevel={skillLevel}
            icon={<FaTrashAlt />} 
        />
      </div>
    </div>
  );
};