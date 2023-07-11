import NamesInterface from "../namesInterface";
import "../styles/NameButton.css";

function NameButton({ key, name, sex }: NamesInterface): JSX.Element {
  const getButtonColour = () => {
    if (sex === "f") {
      return "pink";
    } else if (sex === "m") {
      return "blue";
    }
  };
  const buttonColour = getButtonColour();

  return (
    <button value={name} className={`name-button ${buttonColour}`}>
      {name}
    </button>
  );
}

export default NameButton;
