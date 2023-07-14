import { FieldTypesProps } from "../../../types/FieldTypes";

const Fields = ({
  label,
  inputTypes,
  name,
  inputStyles,
  value,
  handleChange,
}: FieldTypesProps) => {
  return (
    <div className="grid grid-cols-5 gap-3">
      <div className="text-right col-span-2">
        <label>{label}:</label>
      </div>
      <div className="text-left col-span-3">
        <input
          type={inputTypes}
          className={inputStyles}
          value={value}
          name={name}
          onChange={(e)=>handleChange(e)}
        />
      </div>
    </div>
  );
};

export default Fields;
