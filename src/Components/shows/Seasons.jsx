const Seasons = ({ seasons }) => {
  return (
    <div>
      <p>Total Seasons: {seasons.length}</p>

      <p>
        Total Episodes:{" "}
        {seasons.reduce((sum, season) => sum + season.episodeOrder, 0)}
      </p>
      <div>
        {seasons.map((season) => (
          <div key={season.id}>
            <p>Season {season.number}</p>
            <p>Episodes: {season.episodeOrder}</p>
            <div>
              Aired: {season.premieredDate} - {season.endDate}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasons;
