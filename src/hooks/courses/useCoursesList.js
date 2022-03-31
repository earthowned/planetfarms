import { SortOption } from "constants/enums";

export const mockedAllCourses = [
  {
    id: 0,
    title: "A Fueling the ethanol industry",
    price: 2333,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88",
    category: "Farm",
    rating: 4,
    progress: 12,
    members: 20,
  },
  {
    id: 1,
    title: "B Fueling the ethanol industry",
    price: 2599,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar: null,
    category: "Farm",
    rating: 5,
    progress: 70,
    members: 10,
  },
  {
    id: 2,
    title: "C Fueling the ethanol industry",
    price: 122,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar: null,
    category: "Farm",
    rating: 5,
    progress: 40,
    members: 50,
  },
  {
    id: 3,
    title: "Fueling the ethanol industry",
    price: 2599,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88",
    category: "Farm",
    rating: 1,
    progress: 40,
    members: 100,
  },
  {
    id: 4,
    title: "Fueling the ethanol industry",
    price: 2599,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar: null,
    category: "Farm",
    rating: 2,
    progress: 45,
    members: 0,
  },
  {
    id: 5,
    title: "Fueling the ethanol industry",
    price: 3400,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88",
    category: "Farm",
    rating: 3,
    progress: 90,
    members: 200,
  },
];

const sortCoursesBy = ({ list = [], sortType }) => {
  return list.sort((a, b) => {
    switch (sortType) {
      case SortOption.Popular: {
        return b.members - a.members;
      }

      case SortOption.Cheap: {
        return a.price - b.price;
      }

      case SortOption.Expensive: {
        return b.price - a.price;
      }

      case SortOption.RateDescending: {
        return b.rating - a.rating;
      }

      case SortOption.RateAscending: {
        return a.rating - b.rating;
      }

      case SortOption.AlphabetDescending: {
        return a.title.localeCompare(b.title);
      }

      case SortOption.AlphabetAscending: {
        return b.title.localeCompare(a.title);
      }

      default:
        return a;
    }
  });
};

// export const useCoursesList = ({ sorting, type }) => {
export const useCoursesList = ({ sortType }) => {
  return {
    courses: sortCoursesBy({ list: mockedAllCourses, sortType }),
  };
};
