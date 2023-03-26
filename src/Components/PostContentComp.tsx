import { Carousel, Card } from "react-bootstrap";

function PostContentComp(props: { images: Array<string>, text: string }): JSX.Element {
  return (
    <div className="PostContentComp p-3">
      <h6 style={{ marginBottom: "20px" }}>{props.text}</h6>
      {props.images.length > 1 ? (
        <Carousel variant="dark">
          {props.images.map((image: string): JSX.Element => (
            <Carousel.Item key={image}>
              <img className="d-block mx-auto rounded"
                src={image}
                style={{ maxWidth: '100%', objectFit: 'contain', height: "400px" }}
                alt="someImage"/>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <img 
          className="d-block mx-auto rounded"
          style={{ maxWidth: '100%', objectFit: 'contain', height: "400px" }}
          src={props.images[0]}
          alt="oneImage" />
      )}
    </div>
  );
}

export default PostContentComp;
