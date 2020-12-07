const Form = ({ camera }) => {
  return (
    <div className="form-wrapper">
      <form className="form">
        <header className="form-header">Become a photographer.</header>
        <label className="block mt-4 mb-2">Name</label>

        <input className="input-text" type="text" />
        <label className="block mt-4 mb-2">Camera Brand</label>
        <select className="border border-black rounded px-3 py-1">
          <option selected disabled>
            Please select a camera
          </option>
          {camera.map((camera, idx) => (
            <option value={camera} key={idx}>
              {camera}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};
export default Form;
