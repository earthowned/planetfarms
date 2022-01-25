import * as community from "./community";
import { login, getAccessToken } from "./userAction";

export const actions = { community, auth: { login, getAccessToken } };
