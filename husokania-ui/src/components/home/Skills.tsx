import { useEffect, useState } from 'react';
import HusButton, { ButtonType } from '../UI/button/HusButton';
import { ObjectId } from 'mongoose';
import './Skills.scss';

export type Skill = {
    name: string;
    _id: ObjectId
    rating: number;
}

const Skills = () => {

    const [skills, setSkills] = useState<Skill []>([]);
    const [skillName, setSkillName] = useState('');
    const [skillRating, setSkillRating] = useState(0);

    

    //Sayfa yüklenince skilleri getirecek.
    useEffect(() => {
        async function fetchSkills() {   //async yazamadığımız için bu yola başvuruyoruz.
            await getSkills();
        }
        fetchSkills();
    }, [])

    const getSkills = async () => {
        const response = await fetch('http://localhost:5069/skills', {
            method: 'GET'
        })

        const allSkills: Skill[] = await response.json();
        const extractedSkills = allSkills.map(({ _id, name, rating }) => ({ _id, name, rating }));

        setSkills(extractedSkills)
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

    const [product, setProduct] = useState<Product>({productName: 'husoka', categoryId: 3})
    type Product = {productName: string, categoryId: number}
    const inputChangeHandler = (identifier : string, value : string) => {
        if(identifier === 'productName') setProduct( (previousValue) => {return {...previousValue, productName : value}})
        else if (identifier === 'categoryId') setProduct( (previousValue) => {return {...previousValue, categoryId : Number(value)}});
    }

    return (
        <>
        <input type="text" value={product.productName} onChange={(event) => inputChangeHandler('productName', event.target.value) }></input>
            <section className="hus-skills" id="hus-skills">
                <h2 className="heading">My <span>Skills</span></h2>
                <div className="skills-row">
                    <div className="skills-col">
                        <h3 className="title">Coding Skills</h3>
                        <div className="skills-box">
                            <div className="skills-content">
                                <div className="progress">
                                    <h3>HTML <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>

                                <div className="progress">
                                    <h3>HTML <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>

                                <div className="progress">
                                    <h3>HTML <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>

                                <div className="progress">
                                    <h3>HTML <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="skills-col">
                        <h3 className="title">Coding Skills</h3>
                        <div className="skills-box">
                            <div className="skills-content">
                                <div className="progress">
                                    <h3>HTML <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>

                                <div className="progress">
                                    <h3>HTML <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>

                                <div className="progress">
                                    <h3>HTML <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>

                                <div className="progress">
                                    <h3>HTML <span>90%</span></h3>
                                    <div className="bar"><span></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <div>Skills Page
                <label htmlFor='skill-name'> Add Name</label>
                <input value={skillName} onChange={(e) => setSkillName(e.target.value)} type="text" id="skill-name"></input>
                <label htmlFor='skill-rating'> Add Rating</label>
                <input value={skillRating} onChange={(e) => setSkillRating(Number(e.target.value))} type="number" id="skill-rating"></input>
                <button onClick={saveSkill}>Ekle</button>
                <HusButton text='Ekle' btnType={ButtonType.StandartButton} onClick={saveSkill} />
            </div>
            <div className='skills'>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{index +1} - {skill.name} - {skill.rating}</li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Skills