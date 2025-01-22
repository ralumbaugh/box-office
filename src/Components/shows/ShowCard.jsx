const ShowCard = ({ showName, image, id, summary, onStarMeClick }) => {
  const summaryStripped = summary
    ? summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")
    : "No summary available";

  return (
    <div>
      <div>
        <img src={image} alt="{name}" />
      </div>
      <h1>{showName}</h1>

      <div>
        <p>{summaryStripped}</p>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button onClick={() => onStarMeClick(id)}>Star me</button>
      </div>
    </div>
  );
};

export default ShowCard;
