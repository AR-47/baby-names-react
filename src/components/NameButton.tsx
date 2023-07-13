import NameButtonInterface from "../interfaces/nameButtonInterface"
import "../styles/nameButton.css";

function NameButton({ key, name, sex, handleClick}: NameButtonInterface): JSX.Element {

  const getButtonColour = () => {
    if (sex === "f") {
      return "pink";
    } else if (sex === "m") {
      return "blue";
    }
  };
  const buttonColour = getButtonColour();

  return (
    <button
      value={name}
      className={`name-button ${buttonColour}`}
      onClick={handleClick}
      >
      {name}
    </button>
  );
}

export default NameButton;
