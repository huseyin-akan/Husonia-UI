import './AboutMe.scss';
import profilePic from '../../assets/nakamura.gif';
import HusButton, { ButtonType } from '../ui/button/HusButton';
import { useSpinner } from '../ui/spinner/HusSpinnerContext';

const AboutMe = () => {

    const { toggleSpinner } = useSpinner();
    
    const setSpinner = () => {
        toggleSpinner(true);
        setTimeout(() => {
            toggleSpinner(false);
          }, 3000);
    }

    return (
        <section>
            <h2 className="heading">About <span>Me</span></h2>
            <div className="about-content">
                <div className="about-image">
                    <img src={profilePic} className="" alt="profile"/>
                    <span className="circle-spin"></span>
                </div>
            </div>
            <HusButton text="OpenSpinner" btnType={ButtonType.StandartButton} onClick={setSpinner}/>
        </section>
    )
}

export default AboutMe