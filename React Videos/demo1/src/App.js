import "./App.css";
import PropTypes from "prop-types";

function Welcome(props) {
  const { name, phone, isMember } = props;
  const member = isMember ? "Yes" : "No";
  return (
    <p>
      {name} Phone: {phone} is Member: {member}
    </p>
  );
}
Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
  isMember: PropTypes.bool.isRequired,
};

Welcome.defaultProps = {
  isMember: false,
};

function App() {
  return (
    <div>
      <Welcome name="Pelle" phone="12345" isMember={false} />
      <Welcome name="Benjamin" phone="421412" isMember={true} />
      <Welcome name="Mari" phone="3221312" isMember={true} />
      <Welcome name="Matt" phone="212141" isMember={false} />
    </div>
  );
}

export default App;
