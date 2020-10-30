import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export default function PersonList(props) {
  const { persons } = props;

  return (
    <ul>
      {persons.map((person) => (
        <li key={uuidv4()}>{person.name}</li>
      ))}
    </ul>
  );
}

PersonList.propTypes = {
  persons: PropTypes.array,
};
