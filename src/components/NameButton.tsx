import NameButtonProps from "../interfaces/nameButtonProps";
import "../styles/NameButton.css";

function NameButton({ name, sex, handleFavNames }: NameButtonProps): JSX.Element {
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
      onClick = {handleFavNames}
      >
      {name}
    </button>
  );
}

export default NameButton;
