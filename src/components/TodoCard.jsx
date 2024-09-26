/* eslint-disable react/prop-types */
export default function TodoCard(props) {
  const { children } = props;
  return (
    <div>
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <i className="fa-solid fa-trash"></i>
          <i className="fa-solid fa-pen-to-square"></i>
        </div>
      </li>
    </div>
  );
}
