import React from "react";

type Props = {
  children: React.ReactNode
}

export const PrimaryButton: React.FC<Props> = ({ children }) => {

  return (
    <button>{children}</button>
  )
}