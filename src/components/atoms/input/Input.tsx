import React from "react";

type Props = {
  placeholder: string
}

export const Input: React.FC<Props> = ({ placeholder = "" }) => {
  
  return (
    <input type="text" placeholder={placeholder} />
  )
}