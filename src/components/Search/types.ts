export type SearchProps = {
  inputWidth?: string;
  onSearch: (value: string) => void;
  currentValue?: string;
  placeholder?: string;
  height?: string;
  /** When true, resets the input value and calls onSearch("") */
  resetTrigger?: boolean;
};
