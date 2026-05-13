const Button = ({ text, onClick, type = "button" }) => {
  return (

    <button
      type={type}
      onClick={onClick}
      className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer"
    >

      {text}

    </button>

  );
};

export default Button;