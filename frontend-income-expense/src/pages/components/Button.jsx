const Button = (props) => {
  const { name, loginClickHandler } = props;
  return (
    <div>
      <button
        className="w-96 h-12 bg-blue-600 rounded-3xl text-white text-xl"
        onClick={loginClickHandler}
      >
        {name}
      </button>
    </div>
  );
};
export default Button;
