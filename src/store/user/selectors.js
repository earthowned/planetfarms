import { createSelector } from "reselect";

const selectUserStore = (store) => store.user;

export const selectCurrentUser = createSelector(
  [selectUserStore],
  (store) => store.currentProfile
);
