import CarouselReact from "../reactProjects/CarouselReact";
import Shelf from "../home/Shelf";
import Images  from "../home/Images";

const ReactProjects = () => {
  return (
    <div>
      <Images />
      <CarouselReact />
      <div className="react-background"></div>
      <Shelf />
    </div>
  );
};

export default ReactProjects;
