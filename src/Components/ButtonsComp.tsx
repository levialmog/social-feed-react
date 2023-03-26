import { useState } from "react";
import { Button } from "react-bootstrap";
import likeIcon from "../Images/likeIcon.png";
import commentIcon from "../Images/commentIcon.png";
import '../Css/ButtonsComp.css';

function ButtonComp(props: { onLikesChange: (updatedStatusLike: boolean) => void }): JSX.Element {

  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLikeClick = () :void => {
    setIsLiked(!isLiked);
    props.onLikesChange(!isLiked);
  };

  return (
    <div className="ButtonComp">
      <Button 
        variant={isLiked ? "success" : "outline-success"} 
        onClick={handleLikeClick}>
        <img src={likeIcon} alt="like icon" width="25" />
        <span className="d-none d-md-inline">{isLiked ? "Unlike" : "Like"}</span>
      </Button>
      <Button variant="outline-success">
        <img src={commentIcon} alt="comment icon" width="20" />
        {' '}<span className="d-none d-md-inline">Comment</span>
      </Button>
    </div>
  );
}

export default ButtonComp;


