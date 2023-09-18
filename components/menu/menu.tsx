import { Key } from "react";
import { content } from "../content/content";

const Menu = ({
  onMenuClick,
}: {
  onMenuClick: (content: Key | null) => void;
}) => {
  return (
    <div id="menu">
      {content.map((item) => (
        <div
          className="menu-item"
          key={item.key}
          onClick={() => onMenuClick(item.key)}
        >
          <h1>{item.key}</h1>
        </div>
      ))}
    </div>
  );
};

export default Menu;
