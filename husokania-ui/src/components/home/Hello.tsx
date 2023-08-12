import HusButton, { ButtonType } from '../UI/button/HusButton';
import './Hello.css';
import SkillCard from './SkillCard';

const Hello = () => {
    return (
        <>
            <section className="hus-hello" id="hus-hello">
                <div className="hus-container">
                    <div className="hus-left-content">
                        <div className="hus-hello-content">
                            <h1>Hi, Im <span>Hüseyin Akan</span></h1>
                            <div className="text-animate">
                                <h3>Full Stack Developer</h3>
                            </div>
                            <div className="text-animate2">
                                <h3>Full Stack Developer</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aliquid impedit suscipit odio harum id saepe, sint nihil quidem ullam culpa facere ut explicabo molestias, qui itaque quaerat maiores ex labore rem eius est. Quod, doloremque, illum sequi ipsum ea hic velit aliquam odit excepturi quibusdam delectus nulla, nam distinctio porro officia! Voluptate earum ex soluta doloribus, ipsum quos.</p>
                            <div className="hus-btn-box">
                                <HusButton text='Hire Me' onClick={() => { alert('Hullloooo') }} btnType={ButtonType.OutlinedButton}></HusButton>
                                <HusButton text='Lets Talk' onClick={() => { alert('Zahaahhaa') }} btnType={ButtonType.StandartButton}></HusButton>
                            </div>

                            {/* TODO-HUS burası komponent haline getirilmeli */}
                            <div className="hus-social-media">
                                <a href=""> <i className="fa-brands fa-instagram"></i> </a>
                                <a href=""> <i className="fa-brands fa-linkedin"></i> </a>
                                <a href=""> <i className="fa-brands fa-twitter"></i> </a>
                                <a href=""> <i className="fa-brands fa-github"></i> </a>
                                <a href=""> <i className="fa-regular fa-envelope"></i> </a>
                            </div>
                        </div>
                    </div>
                    <div className="hus-right-content">
                        <SkillCard />
                    </div>
                </div>


            </section>
        </>
    )
}

export default Hello