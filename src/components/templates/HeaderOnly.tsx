import React from "react";
import { Header } from "../atoms/layout/Header";

type Props = {
  children: React.ReactNode
}

export const HeaderOnly: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}