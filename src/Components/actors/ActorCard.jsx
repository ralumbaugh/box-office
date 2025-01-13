const ActorCard = ({ name, image, country, birthday, deathday, gender }) => {
  return (
    <div>
      <div>
        <img src={image} alt="{name}" />
      </div>
      <h1>
        {name} {Boolean(gender) && `(${gender})`}
      </h1>

      <p>{country ? `Comes from ${country}` : "No country known"}</p>

      {Boolean(birthday) && <p>Born {birthday}</p>}

      <p>{deathday ? `Died ${deathday}` : "Alive"}</p>
    </div>
  );
};

export default ActorCard;
