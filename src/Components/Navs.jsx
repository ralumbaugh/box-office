import { Link } from "react-router-dom";

const Links = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Starred",
    to: "/starred",
  },
];
const Navs = () => {
  return (
    <div>
      <ul>
        {Links.map((item) => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
