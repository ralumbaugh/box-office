export default function AppTitle(props) {
  const {
    title = "Box Office",
    subtitle = "Let's look for movies or actors!",
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
