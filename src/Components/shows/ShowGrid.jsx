import ShowCard from "./ShowCard";

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map((data) => (
        <ShowCard
          key={data.show.id}
          id={data.show.id}
          showName={data.show.name}
          image={
            data.show.image?.medium
              ? data.show.image.medium
              : "/not-found-image.png"
          }
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;
