import React from "react";
import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

type Props = {
  children: React.ReactNode
}

export const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}