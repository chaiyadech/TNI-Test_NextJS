"use client";
import { Provider } from "react-redux";
import { store } from "../../Redux/store"
import React from "react";

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
