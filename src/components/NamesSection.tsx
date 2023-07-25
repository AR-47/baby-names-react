import NamesSectionProps from "../interfaces/namesSectionProps";

function NamesSection({displayHeading, listOfNames}: NamesSectionProps): JSX.Element {
  return (
      <>
          <h3>{displayHeading}</h3>
          {listOfNames}
          <hr />
      </>
  )
}

export default NamesSection;