import { SortOption, SortOptionLabel } from "constants/enums";

export const createSortingOptions = () => {
  return [
    SortOption.Popular,
    SortOption.Cheap,
    SortOption.Expensive,
    SortOption.RateDescending,
    SortOption.RateAscending,
    SortOption.AlphabetDescending,
    SortOption.AlphabetAscending,
  ].map((option) => ({
    value: option,
    label: SortOptionLabel[option],
  }));
};
