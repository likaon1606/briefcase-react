import "../../styles/home/images.css";

const Images = () => {
  return (
    <div>
      <div className='container'>
        <div className='phone'>
          <img
            src='https://demo.gridgum.com/free-templates/blogger/wp-content/themes/Blogger/images/bg_phoneIcon.png'
            alt='phone'
          />
        </div>
        <div className='coffee'>
          <img
            src='https://demo.gridgum.com/free-templates/blogger/wp-content/themes/Blogger/images/bg_coffeIcon.png'
            alt='coffee'
          />
        </div>
        <div className='notebook'>
          <img
            src='https://demo.gridgum.com/free-templates/blogger/wp-content/themes/Blogger/images/bg_notebookIcon.png'
            alt='notebook'
          />
        </div>
        <div className='headphones'>
          <img
            src='https://demo.gridgum.com/free-templates/blogger/wp-content/themes/Blogger/images/bg_headphones.png'
            alt='headphones'
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
