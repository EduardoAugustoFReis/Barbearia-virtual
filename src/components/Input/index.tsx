import { InputHTMLAttributes } from "react";
import { StyledInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  label: string, 
  id: string, 
  placeholder?: string,
}

export default function Input({label, id, placeholder, ...rest}: InputProps) {
  return (
    <StyledInput>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} placeholder={placeholder} {...rest}/>
    </StyledInput>
  )
}