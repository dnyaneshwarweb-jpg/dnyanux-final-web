type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 font-medium transition-all duration-300 hover:scale-105">
      {text}
    </button>
  );
};

export default Button;