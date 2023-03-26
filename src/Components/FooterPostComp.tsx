import { useState } from "react";
import TotalReactionsComp from "./TotalReactionsComp";
import ButtonsComp from "./ButtonsComp";

function FooterPostComp(props: { likes: number, comments: number }): JSX.Element {
  const [likes, setLikes] = useState<number>(props.likes);

  const handleLikesChange = (updatedStatusLike: boolean): void =>  {
    setLikes(updatedStatusLike ? likes + 1 : likes - 1);
  };

  return (
    <div className="FooterPostComp">
      <TotalReactionsComp likes={likes} comments={props.comments} />
      <ButtonsComp onLikesChange={handleLikesChange} />
    </div>
  );
}

export default FooterPostComp;
