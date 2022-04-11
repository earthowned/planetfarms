import {
  useMemo,
  useState,
  useContext,
  useCallback,
  createContext,
} from "react";

export const SearchBarContext = createContext();

export const useSearchBar = () => {
  const context = useContext(SearchBarContext);
  return context;
};

export const SearchBarProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [expand, setExpand] = useState(false);

  const onChangeExpand = useCallback((value) => setExpand(value), []);

  const onChangeValue = useCallback((value) => setQuery(value), []);

  const contextValue = useMemo(
    () => ({
      onChangeValue,
      onChangeExpand,
      isExpanded: expand,
      searchValue: query,
    }),
    [expand, query]
  );

  return (
    <SearchBarContext.Provider value={contextValue}>
      {children}
    </SearchBarContext.Provider>
  );
};
