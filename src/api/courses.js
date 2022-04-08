import { apiInstance } from "./instance";
/*
    filter: My | Paid | All
    sort: Popular | Cheap | Expensive | RateDescending | RateAscending | AlphabetDescending | AlphabetAscending
*/
export const list = ({ pageSize, page, search, sort, filter, cancelToken }) =>
  apiInstance.get("/courses", {
    cancelToken,
    params: { page, pageSize, search, sort, filter },
  });
