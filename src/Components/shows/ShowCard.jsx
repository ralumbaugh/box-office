import { Link } from "react-router-dom";

const ShowCard = ({ showName, image, id, summary }) => {
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
        <Link to="/">Read more</Link>
        <button>Star me</button>
      </div>
    </div>
  );
};

export default ShowCard;
