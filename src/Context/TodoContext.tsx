import { createContext } from "react";
import { TTodoContextProps } from "../Interfaces";

export const Todocontext = createContext<TTodoContextProps>({} as TTodoContextProps);
