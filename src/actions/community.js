import { api } from "api";

// TODO: Why we storing this in localStorage.
// TODO: Investigate and rewrite to redux.
export const news = () => async (dispatch) => {
  try {
    const response = await api.community.news();

    const { communities } = response.data;
    // const { communities, page, pageSize, totalPages, totalItems } = response.data;
    localStorage.setItem("currentCommunity", JSON.stringify(communities[0]));

    return Promise.resolve(communities[0]);
  } catch (error) {
    return Promise.reject(error);
  }
};
