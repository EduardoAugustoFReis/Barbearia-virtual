/* eslint-disable @next/next/no-img-element */
"use client";
import { InputHTMLAttributes, useState } from "react";
import { InputFilePreviewContainer } from "./styles";

interface InputFilePreviewProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputFilePreview({
  id,
  label,
  onChange,
  ...rest
}: InputFilePreviewProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else {
      setPreview(null);
    }

    if (onChange) onChange(e);
  };

  return (
    <InputFilePreviewContainer>
      <label htmlFor={id} className="buttonPreview">{label}</label>
      <input
        type="file"
        name={id}
        id={id}
        onChange={handleChange}
        {...rest}
      />
      {preview && <img src={preview} alt="Preview"/>}
    </InputFilePreviewContainer>
  );
}
