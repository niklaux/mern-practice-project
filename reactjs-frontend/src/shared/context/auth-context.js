import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  login: () => {},
  logout: () => {},
});

// createContext allows us to share between components some data behind the scenes
// this object can be shared between components
