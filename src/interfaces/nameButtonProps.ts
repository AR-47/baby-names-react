import NameInfoInterface from "./nameInfoInterface";

interface NameButtonProps {
  key: number;
  nameInfo: NameInfoInterface;
  handleClick: (nameInfo: NameInfoInterface) => void;
}

export default NameButtonProps;
