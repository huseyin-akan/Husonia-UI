import HusButton, { ButtonType } from '../UI/button/HusButton';
import './ContactMe.scss'

const ContactMe = () => {
  return (
    <section className="hus-contact-me" id="hus-contact-me">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <form>
        <div className="input-box">
          <div className="input-field">
            <input type="text" placeholder="Full Name" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Email Address" required />
            <span className="focus"></span>
          </div>
        </div>
        <div className="input-box">
          <div className="input-field">
            <input type="number" placeholder="Mobile Phone" required />
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input type="text" placeholder="Email Address" required />
            <span className="focus"></span>
          </div>
        </div>
        <div className="textarea-field">
          <textarea name="" id="" cols={30} rows={10} placeholder="Your Message" required></textarea>
          <span className="focus"></span>
        </div>
        <div className="btn-box btns">
        <HusButton text='Submit' onClick={() => { alert('Hullloooo') }} btnType={ButtonType.OutlinedButton}></HusButton>
        </div>
      </form>
    </section>
  );
};

export default ContactMe;
