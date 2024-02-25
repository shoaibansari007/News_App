import loading from "./spinner.gif";

function Spinner() {
  return (
    <div className="block w-full">
      <img src={loading} alt="spinner" className="mx-auto" />
    </div>
  );
}

export default Spinner;
