import { createSelector } from "@ngrx/store";
import * as fromAuth from "./reducers";

export const isLoggedIn = createSelector(
  (state) => state[fromAuth.authFeatureKey],
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(isLoggedIn, (loggedIn) => !loggedIn);
