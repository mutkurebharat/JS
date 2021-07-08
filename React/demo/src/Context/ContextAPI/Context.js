import { createContext } from "react";

const contextApi = createContext();

const ContextApiProvider = contextApi.Provider;

const ContextApiConsumer = contextApi.Consumer;

export { ContextApiProvider, ContextApiConsumer };