import '../../styles/home/images.css';

import phone from '../../assets/img/phone.webp';
import coffee from '../../assets/img/coffe.webp';
import notebook from '../../assets/img/notebook.webp';
import headphones from '../../assets/img/headphones.webp';

const Images = () => {
  return (
    <div>
      <div className='container'>
        <div className='phone'>
          <img src={phone} alt='phone' />
        </div>
        <div className='coffee'>
          <img src={coffee} alt='coffee' />
        </div>
        <div className='notebook'>
          <img src={notebook} alt='notebook' />
        </div>
        <div className='headphones'>
          <img src={headphones} alt='headphones' />
        </div>
      </div>
    </div>
  );
};

export default Images;
