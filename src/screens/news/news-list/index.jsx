import { useState } from "react";

import { DashboardLayout } from "layout/dashboard";
import { NewsItem } from "common/list-items/news-item";
import { ActionButton } from "common/buttons/action-button";

import { Filters } from "./filters";
import { FiltersModal } from "./filters-modal";

import "./styles.scss";

const newsList = [
  {
    id: 0,
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "Fueling the ethanol industry",
    smallText:
      "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the...",
    createdAt: "November 01, 2020",
    readTime: "5 min read",
    tag: "Farming",
    authorName: "Leslie Alexander",
  },
  {
    id: 1,
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "Fueling the ethanol industry",
    smallText:
      "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the...",
    createdAt: "November 01, 2020",
    readTime: "5 min read",
    tag: "Farming",
    authorName: "Leslie Alexander",
  },
  {
    id: 2,
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "Fueling the ethanol industry",
    smallText:
      "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the...",
    createdAt: "November 01, 2020",
    readTime: "5 min read",
    tag: "Farming",
    authorName: "Leslie Alexander",
  },
  {
    id: 3,
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "Fueling the ethanol industry",
    smallText:
      "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the...",
    createdAt: "November 01, 2020",
    readTime: "5 min read",
    tag: "Farming",
    authorName: "Leslie Alexander",
  },
  {
    id: 4,
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "Fueling the ethanol industry",
    smallText:
      "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the...",
    createdAt: "November 01, 2020",
    readTime: "5 min read",
    tag: "Farming",
    authorName: "Leslie Alexander",
  },
  {
    id: 5,
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "Fueling the ethanol industry",
    smallText:
      "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the...",
    createdAt: "November 01, 2020",
    readTime: "5 min read",
    tag: "Farming",
    authorName: "Leslie Alexander",
  },
  {
    id: 6,
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "Fueling the ethanol industry",
    smallText:
      "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the...",
    createdAt: "November 01, 2020",
    readTime: "5 min read",
    tag: "Farming",
    authorName: "Leslie Alexander",
  },
  {
    id: 7,
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "Fueling the ethanol industry",
    smallText:
      "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the...",
    createdAt: "November 01, 2020",
    readTime: "5 min read",
    tag: "Farming",
    authorName: "Leslie Alexander",
  },
  {
    id: 8,
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "Fueling the ethanol industry",
    smallText:
      "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the...",
    createdAt: "November 01, 2020",
    readTime: "5 min read",
    tag: "Farming",
    authorName: "Leslie Alexander",
  },
  {
    id: 9,
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "Fueling the ethanol industry",
    smallText:
      "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the...",
    createdAt: "November 01, 2020",
    readTime: "5 min read",
    tag: "Farming",
    authorName: "Leslie Alexander",
  },
  {
    id: 10,
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "Fueling the ethanol industry",
    smallText:
      "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the...",
    createdAt: "November 01, 2020",
    readTime: "5 min read",
    tag: "Farming",
    authorName: "Leslie Alexander",
  },
  {
    id: 11,
    image:
      "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    title: "Fueling the ethanol industry",
    smallText:
      "Ethanol, which is sometimes known as ethyl alcohol, is a kind of alcohol derived from corn, sugarcane, and grain or indirectly from paper waste. It’s also the...",
    createdAt: "November 01, 2020",
    readTime: "5 min read",
    tag: "Farming",
    authorName: "Leslie Alexander",
  },
];

export const NewsListPage = () => {
  const [filters, setFilters] = useState([]);
  const [addFilterVisible, setAddFilterVisible] = useState(false);

  const onFilterRemove = (filter) => {
    setFilters(filters.filter((item) => item !== filter));
  };

  const handleFiltersApply = (selected) => {
    setFilters([...selected]);
    setAddFilterVisible(false);
  };

  const getNewsItemVariant = (index) => {
    if (index === 0 || index % 4 === 0) return "big";
    return "default";
  };

  return (
    <DashboardLayout title="News">
      <div className="news-page-header">
        <Filters
          filters={filters}
          onRemove={onFilterRemove}
          onAdd={() => setAddFilterVisible(true)}
        />

        <ActionButton variant="primary" title="Add New" icon="plus" />
      </div>

      <div className="news-list-container">
        {newsList.map((item, index) => (
          <NewsItem
            news={item}
            key={item.id}
            variant={getNewsItemVariant(index)}
          />
        ))}
      </div>

      <FiltersModal
        selectedFilters={filters}
        visible={addFilterVisible}
        onApply={handleFiltersApply}
        onClose={() => setAddFilterVisible(false)}
      />
    </DashboardLayout>
  );
};
