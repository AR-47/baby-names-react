import NameInfoInterface from "./nameInfoInterface";

interface NameButtonProps {
    key: number,
    nameInfo: NameInfoInterface
    handleFavNames: (id: number) => void
}

export default NameButtonProps;
