const Button = (props) => {
  const { innerText, ClickedButton } = props;
  return (
    <div>
      <button
        className="w-96 h-12 bg-blue-600 rounded-3xl text-white text-xl"
        onClick={ClickedButton}
      >
        {innerText}
      </button>
    </div>
  );
};
export default Button;
