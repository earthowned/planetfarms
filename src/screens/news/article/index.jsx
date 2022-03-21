import { useEffect } from "react";
import { useAlert } from "react-alert";
import { useParams } from "react-router-dom";

import { DashboardLayout } from "layout/dashboard";

import { api } from "api";

import "./styles.scss";

export const ArticlePage = () => {
  const alert = useAlert();
  const { id } = useParams();

  useEffect(async () => {
    try {
      const response = await api.news.get({ id });
      console.log(response);
    } catch (error) {
      alert.error(error);
    }
  }, [id]);

  return (
    <DashboardLayout withBackButton>
      <div className="article-page-container">{/* <Header /> */}</div>
    </DashboardLayout>
  );
};
