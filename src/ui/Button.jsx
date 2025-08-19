import { ArrowRight } from "lucide-react";

const Button = ({
  label,
  showChevron = false,
  btnbg,
  textColor = "black",
  to,
  px,
  py,
}) => {
  return (
    <a
      href={`${to}`}
      target="_blank"
      className={`relative overflow-hidden bg-${btnbg}  font-medium py-${py}  px-${px} rounded-xl transition-colors duration-200 group`}
    >
      <span className=" transition-transform duration-200 ease-in-out group-hover:translate-x-[200%] flex items-center gap-2">
        {showChevron && (
          <div className="bg-white w-7 h-7 flex justify-center items-center rounded-sm">
            <ArrowRight size={16} />
          </div>
        )}
        <div className={`text-${textColor}`}>{label}</div>
      </span>

      <span className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-in-out -translate-x-full group-hover:translate-x-0 gap-2">
        <div className={`text-${textColor}`}>{label}</div>

        {showChevron && (
          <div className="bg-white w-7 h-7 flex justify-center items-center rounded-sm">
            <ArrowRight size={16} />
          </div>
        )}
      </span>
    </a>
  );
};

export default Button;
