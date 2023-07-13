import NameButtonProps from "../interfaces/nameButtonProps"
import "../styles/nameButton.css";

function NameButton({ key, name, sex, handleNameButtonClick}: NameButtonProps): JSX.Element {

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
      key={key}
      value={name}
      className={`name-button ${buttonColour}`}
      //onClick={(e) => handleNameButtonClick(e.target.value)}
      onClick={(e) => console.log(e.target)}

      >
      {name}
    </button>
  );
}

export default NameButton;
