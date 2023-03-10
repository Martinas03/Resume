import React from 'react';
import s from './Skills.module.css'
import styleContainer from './../comon/styles/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Can do nice sites'}/>
                    <Skill title={'CSS'} description={'Can do nice functions'}/>
                    <Skill title={'REACT'} description={'Can do nice component'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;

