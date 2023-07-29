import NameButtonProps from "../interfaces/nameButtonProps";
import "../styles/nameButton.css";

function NameButton({ nameInfo, handleClick }: NameButtonProps): JSX.Element {
  const getButtonColour = () => {
    if (nameInfo.sex === "f") {
      return "pink";
    } else if (nameInfo.sex === "m") {
      return "blue";
    }
  };

  const buttonColour = getButtonColour();

  return (
    <button
      value={nameInfo.name}
      className={`name-button ${buttonColour}`}
      onClick={() => handleClick(nameInfo)}
    >
      {nameInfo.name}
    </button>
  );
}

export default NameButton;
