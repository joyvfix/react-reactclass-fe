import PropTypes from "prop-types";

const Input = ({ label, value, onChange, type, required, className }) => {
  return (
    <div className="gap-2 name_karya flex flex-col w-full">
      <label htmlFor="name_karya" className=" text-black font-medium">
        {label}
      </label>
      <input
        required={required}
        className={`px-4 py-3 rounded-md bg-gray-100 outline-none text-sm placeholder:text-sm ${className}`}
        type={type}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  required: PropTypes.bool,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: "text",
  required: false,
};

export default Input;
