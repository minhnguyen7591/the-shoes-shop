import React, { Fragment, ReactNode } from "react";
import "./global-style.scss";

/** Cách 1:  */
type Props = {
  children: ReactNode;
};
/** PropsWithChildren: Cách 2 */
export function GlobalStyle(props: Props) {
  const { children } = props;

  return <Fragment>{children}</Fragment>;
}
