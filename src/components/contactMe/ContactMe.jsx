import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Images from '../home/Images';
import Shelf from '../home/Shelf';
import conversation from '../../assets/img/conversation.png';
import '../../styles/contactme/contactme.css';

const ContactMe = () => {
  return (
    <div className='principal'>
      <Images />
      <div className='about'>
        <div className='container-contact'>
          <div className='conversation'>
            <img src={conversation} alt='conversation' />
          </div>
          <div className='contact-me'>
            <FontAwesomeIcon icon={faPhoneVolume} className='me-2 img-contactme' />
            <h4>
              <a href='tel:+525532604568'>55 3260 4568</a>
            </h4>
          </div>
          <div className='contact-me'>
            <FontAwesomeIcon icon={faEnvelope} className='me-2 img-contactme' />
            <h4>
              <a href='mailto:ariel.fg@mexwebdesign.com' target='blank'>
                ariel.fuentesgarcia@gmail.com
              </a>
            </h4>
          </div>
          <div className='contact-me'>
            <FontAwesomeIcon icon={faWhatsapp} className='me-2 img-contactme' />
            <h4>
              <a href='https://wa.me/5532604568' target='blank'>
                55 3260 4568
              </a>
            </h4>
          </div>
        </div>
        <div className='broken-sheet'></div>
      </div>
      <Shelf />
    </div>
  );
};

export default ContactMe;
