import './AboutMe.scss';
import profilePic from '../../assets/nakamura.gif';
import HusButton, { ButtonType } from '../UI/button/HusButton';
import { useSpinner } from '../UI/spinner/HusSpinnerContext';
import { ToastService } from '../../services/toastrService';

const AboutMe = () => {
    const toastService = new ToastService();
    const { toggleSpinner } = useSpinner();
    
    const setSpinner = () => {
        toggleSpinner(true);
        
        toastService.showErrorMessage("Ahanda buradayık.");
        toastService.showSuccessMessage("Ahanda buradayık.");
        
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