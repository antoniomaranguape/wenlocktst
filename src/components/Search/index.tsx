import { useState, useEffect, useRef, useCallback } from "react";
import { Search as SearchIcon, X } from "lucide-react";
import { Container, SearchIconWrapper } from "./styles";
import type { SearchProps } from "./types";

const DEBOUNCE_MS = 400;

export function Search({
  inputWidth,
  currentValue,
  placeholder = "Pesquisa",
  onSearch,
  height,
  resetTrigger,
}: SearchProps) {
  const [value, setValue] = useState("");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onSearchRef = useRef(onSearch);
  onSearchRef.current = onSearch;

  const debouncedOnSearch = useCallback((searchValue: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      onSearchRef.current(searchValue);
      timeoutRef.current = null;
    }, DEBOUNCE_MS);
  }, []);

  useEffect(() => {
    if (resetTrigger) {
      setValue("");
      onSearch("");
    }
  }, [resetTrigger, onSearch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue(currentValue ?? "");
    }, 100);
    return () => clearTimeout(timer);
  }, [currentValue]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setValue(newValue);
    debouncedOnSearch(newValue);
  }

  function handleClear() {
    setValue("");
    onSearch("");
  }

  return (
    <Container size={inputWidth} height={height}>
      <SearchIconWrapper>
        <SearchIcon size={18} />
      </SearchIconWrapper>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        aria-label="Campo de pesquisa"
      />
      {value ? (
        <button type="button" onClick={handleClear} aria-label="Limpar pesquisa">
          <X size={18} />
        </button>
      ) : null}
    </Container>
  );
}
