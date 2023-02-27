import Images from '../home/Images';
import Shelf from '../home/Shelf';
import email from '../../assets/img/email.png';
import phone from '../../assets/img/phone2.png';
import whats from '../../assets/img/whatsapp.png';
import conversation from '../../assets/img/conversation.png'
import '../../styles/contactme/contactme.css';

const ContactMe = () => {
  return (
    <div>
      <Images />
      <div className="about">
        <div className='conversation'>
        <img src={conversation} alt='conversation'/>
        </div>
        <div className='container-contact'>
        <div className="contact-me">
        <img src={phone} alt='email' className='img-contactme' />
        <h4><a href='tel:+525532604568'>(+52) 55 80 36 58 33</a></h4>
        </div>
          <div className="contact-me">
        <img src={email} alt='email' className='img-contactme' />
        <h4><a href='mailto:ariel.fg@mexwebdesign.com' target='blank'>ariel.fg@mexwebdesign.com</a></h4>
        </div>
        <div className="contact-me">
        <img src={whats} alt='email' className='img-contactme' />
        <h4><a href='mailto:ariel.fg@mexwebdesign.com' target='blank'>55 3260 4568</a></h4>
        </div>
        </div>
      </div>
      <Shelf />
    </div>
  );
};

export default ContactMe;