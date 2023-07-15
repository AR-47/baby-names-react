import NamesDisplayProps from "../interfaces/NamesDisplayProps";

function NamesDisplay({displayHeading, listOfNames}: NamesDisplayProps): JSX.Element {
  return (
      <>
          <h3>{displayHeading}</h3>
          {listOfNames}
          <hr />
      </>
  )
}

export default NamesDisplay;