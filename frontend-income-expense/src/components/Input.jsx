const Input = (props) => {
  const { placeholder, type, name, handleChange } = props;
  return (
    <input
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      name={name}
      className="w-96 h-12 rounded-xl border pl-2 bg-gray-100"
      required
    ></input>
  );
};
export default Input;
