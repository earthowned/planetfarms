import {
  MoreOptionIcon,
  MoreOptionLabel,
  MoreOptionVariant,
} from "constants/enums";

export const createMoreOption = (option) => ({
  value: option,
  ...(MoreOptionIcon[option] && { icon: MoreOptionIcon[option] }),
  ...(MoreOptionLabel[option] && { label: MoreOptionLabel[option] }),
  ...(MoreOptionVariant[option] && { variant: MoreOptionVariant[option] }),
});
