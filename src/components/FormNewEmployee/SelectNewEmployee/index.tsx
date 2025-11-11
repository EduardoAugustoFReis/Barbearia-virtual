import { SelectHTMLAttributes } from "react";
import { SelectNewEmployeeContainer } from "./styles";

type UserRole = "barbeiro" | "admin";

interface SelectNewEmployeeProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: UserRole[];
}

export default function SelectNewEmployee({
  id,
  label,
  options,
  ...rest
}: SelectNewEmployeeProps) {
  return (
    <SelectNewEmployeeContainer>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} {...rest}>
        <option value="">Selecione a função</option>
        {options.map((opt) => {
          return <option key={opt} value={opt}>{opt}</option>;
        })}
      </select>
    </SelectNewEmployeeContainer>
  );
}
