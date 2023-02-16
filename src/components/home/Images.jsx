import '../../styles/home/images.css';
import phone from '../../assets/img/phone.png';
import coffee from '../../assets/img/coffee.png';
import notebook from '../../assets/img/notebook.png';
import headphones from '../../assets/img/headphones.png';

const Images = () => {
  return (
    <div>
      <div className="container">
        <div className="phone"><img src={phone} alt='phone'/></div>
        <div className="coffee"><img src={coffee} alt='coffee'/></div>
        <div className="notebook"><img src={notebook} alt='notebook'/></div>
        <div className="headphones"><img src={headphones} alt='headphones'/></div>
      </div>
    </div>
  );
};

export default Images;