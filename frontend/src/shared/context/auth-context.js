import { createContext } from "react";

// createContext allows us to share between components some data behind the scenes
// this object can be shared between components

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
