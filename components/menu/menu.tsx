const menuItems = ["About me", "Projects", "Resume", "Contact"];

export default function Menu() {
  return (
    <div id="menu">
      {menuItems.map((item) => (
        <div className="menu-item" key={item}>
          <h1>{item}</h1>
        </div>
      ))}
    </div>
  );
}
