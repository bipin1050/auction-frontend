import { FieldTypesProps } from "../../../types/FieldTypes";

const Fields = ({label,inputTypes , inputStyles }: FieldTypesProps) => {
  return (
    <div className="grid grid-cols-5 gap-3">
      <div className="text-right col-span-2">
        <label>{label}:</label>
      </div>
      <div className="text-left col-span-3">
        <input type={inputTypes} className={inputStyles} />
      </div>
    </div>
  );
}

export default Fields