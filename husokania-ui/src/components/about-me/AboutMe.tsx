import './AboutMe.scss';
import profilePic from '../../assets/nakamura.gif';

const AboutMe = () => {
    return (
        <section>
            <h2 className="heading">About <span>Me</span></h2>
            <div className="about-content">
                <div className="about-image">
                    <img src={profilePic} className="" alt="profile"/>
                    <span className="circle-spin"></span>
                </div>
            </div>
        </section>
    )
}

export default AboutMe