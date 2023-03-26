function TotalReactionsComp(props: { likes: number, comments: number }): JSX.Element {
  return (
    <div
      className="TotalReactionsComp"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <p>{props.likes} Likes</p>
      <p>{props.comments} Comments</p>
    </div>
  );
}

export default TotalReactionsComp;
