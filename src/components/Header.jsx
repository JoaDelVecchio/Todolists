import TodoInput from "./TodoInput";

const Header = (props) => {
  return (
    <header>
      <div className="onamissionContainer">
        <h1>ON A MISSION</h1>
        <img src="./src/assets/logo.png" alt="" />
      </div>
      <TodoInput {...props} />
    </header>
  );
};

export default Header;
