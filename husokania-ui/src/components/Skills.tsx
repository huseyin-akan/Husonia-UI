import { useState } from 'react';

export interface Skill{
    name: string;
    rating : number;
}

const Skills = () => {

    const [skills, setSkills] = useState('');
    const [skillName, setSkillName] = useState('');
    const [skillRating, setSkillRating] = useState(0);

    const getSkills = async () => {
        const response = await fetch('http://localhost:5069/skills', {
            method: 'GET'
        })

        let allSkills = await response.json();
        let skillRows= '';
        for(let i = 0; i<allSkills.length; i++){
            skillRows += `<div>${allSkills[i].name} - ${allSkills[i].rating} </div>`;
        }
        setSkills(skillRows)
    }

    const saveSkill = async () => {
        await fetch('http://localhost:5069/skills', {
            method: "POST",
            body: JSON.stringify({
                name: skillName, rating: skillRating
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        await getSkills();
    }

    return (
        <>
        <div>Skills Page
            <label htmlFor='skill-name'> Add Name</label>
            <input value={skillName} onChange={(e) => setSkillName(e.target.value)} type="text" id="skill-name"></input>
            <label htmlFor='skill-rating'> Add Rating</label>
            <input value={skillRating} onChange={(e) => setSkillRating(Number(e.target.value))} type="number" id="skill-rating"></input>
            <button onClick={saveSkill}>Ekle</button>
        </div>
        {skills}
        </>
    )
}

export default Skills