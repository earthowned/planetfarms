import { ContentBuilderAction } from "constants/enums";

export const mockedCourses = [
  {
    id: "0",
    title: "A Fueling the Content",
    price: 2333,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88",
    category: "Farm",
    rating: 4,
    progress: 12,
    createdAt: new Date(2021, 11, 17),

    content: [
      {
        type: ContentBuilderAction.Text,
        title: "Senectus sed facilisis egestas adipiscing mauris.",
        text: "Malesuada sit ac at at eu non, magna. Ut fringilla dui euismod congue bibendum leo venenatis convallis. Platea bibendum mauris etiam in ut nunc praesent. Neque diam proin diam a, id malesuada. Ut faucibus est turpis ullamcorper. Adipiscing adipiscing pretium faucibus vulputate fringilla. Tortor risus aliquam sit orci et adipiscing. Euismod nunc interdum donec purus etiam diam imperdiet facilisis. Ligula egestas sit commodo purus, amet ut rhoncus, et.",
      },
      {
        type: ContentBuilderAction.Image,
        url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88",
        description: "Combine Harvester swather",
      },
      {
        type: ContentBuilderAction.Text,
        title: "Senectus sed facilisis egestas adipiscing mauris.",
        text: "Malesuada sit ac at at eu non, magna. Ut fringilla dui euismod congue bibendum leo venenatis convallis. Platea bibendum mauris etiam in ut nunc praesent. Neque diam proin diam a, id malesuada. Ut faucibus est turpis ullamcorper. Adipiscing adipiscing pretium faucibus vulputate fringilla. Tortor risus aliquam sit orci et adipiscing. Euismod nunc interdum donec purus etiam diam imperdiet facilisis. Ligula egestas sit commodo purus, amet ut rhoncus, et.",
      },
      {
        type: ContentBuilderAction.Text,
        // title: "Senectus sed facilisis egestas adipiscing mauris.",
        text: "Malesuada sit ac at at eu non, magna. Ut fringilla dui euismod congue bibendum leo venenatis convallis. Platea bibendum mauris etiam in ut nunc praesent. Neque diam proin diam a, id malesuada. Ut faucibus est turpis ullamcorper. Adipiscing adipiscing pretium faucibus vulputate fringilla. Tortor risus aliquam sit orci et adipiscing. Euismod nunc interdum donec purus etiam diam imperdiet facilisis. Ligula egestas sit commodo purus, amet ut rhoncus, et.",
      },
      {
        type: ContentBuilderAction.Text,
        // title: "Senectus sed facilisis egestas adipiscing mauris.",
        text: "Malesuada sit ac at at eu non, magna. Ut fringilla dui euismod congue bibendum leo venenatis convallis. Platea bibendum mauris etiam in ut nunc praesent. Neque diam proin diam a, id malesuada. Ut faucibus est turpis ullamcorper. Adipiscing adipiscing pretium faucibus vulputate fringilla. Tortor risus aliquam sit orci et adipiscing. Euismod nunc interdum donec purus etiam diam imperdiet facilisis. Ligula egestas sit commodo purus, amet ut rhoncus, et.",
      },
      {
        type: ContentBuilderAction.Image,
        url: "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88",
        description: "Combine Harvester swather",
      },
      {
        type: ContentBuilderAction.Text,
        title: "Senectus sed facilisis egestas adipiscing mauris.",
        text: "Malesuada sit ac at at eu non, magna. Ut fringilla dui euismod congue bibendum leo venenatis convallis. Platea bibendum mauris etiam in ut nunc praesent. Neque diam proin diam a, id malesuada. Ut faucibus est turpis ullamcorper. Adipiscing adipiscing pretium faucibus vulputate fringilla. Tortor risus aliquam sit orci et adipiscing. Euismod nunc interdum donec purus etiam diam imperdiet facilisis. Ligula egestas sit commodo purus, amet ut rhoncus, et.",
      },
    ],

    members: [
      {
        id: "0",
        name: "Jenny Wilson",
        avatar:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      {
        id: "1",
        name: "Russel Diane",
      },
      {
        id: "2",
        name: "Alambet Brojik",
        avatar:
          "https://image.shutterstock.com/image-photo/young-girl-makes-favor-condescendingly-260nw-1287061849.jpg",
      },
      {
        id: "3",
        name: "Resie Cooper",
        avatar:
          "https://st4.depositphotos.com/13768208/21182/i/600/depositphotos_211827780-stock-photo-crazy-girl-showing-her-palms.jpg",
      },
      {
        id: "4",
        name: "Justin Biber",
      },
      {
        id: "5",
        name: "Amal Kekov",
        avatar:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      {
        id: "6",
        name: "Elizhabet Perkins",
        avatar:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
      {
        id: "7",
        name: "Ronald Richardson",
        avatar:
          "https://st4.depositphotos.com/13768208/21182/i/600/depositphotos_211827780-stock-photo-crazy-girl-showing-her-palms.jpg",
      },
      {
        id: "8",
        name: "Abram Ibragimov",
      },
      {
        id: "9",
        name: "Sheldon Cooper",
        avatar:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      },
    ],
  },
  {
    id: "1",
    title: "B Fueling the ethanol industry",
    price: 2599,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar: null,
    category: "Farm",
    rating: 5,
    progress: 70,
    members: [],
    createdAt: new Date(2020, 5, 17),
  },
  {
    id: "2",
    title: "C Fueling the ethanol industry",
    price: 122,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar: null,
    category: "Farm",
    rating: 5,
    progress: 40,
    members: [],
    createdAt: new Date(2020, 11, 5),
  },
  {
    id: "3",
    title: "Fueling the ethanol industry",
    price: 2599,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88",
    category: "Farm",
    rating: 1,
    progress: 40,
    members: [],
    createdAt: new Date(2022, 4, 17),
  },
  {
    id: "4",
    title: "Fueling the ethanol industry",
    price: 2599,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar: null,
    category: "Farm",
    rating: 2,
    progress: 45,
    members: [],
    createdAt: new Date(2022, 11, 17),
  },
  {
    id: "5",
    title: "Fueling the ethanol industry",
    price: 3400,
    description:
      "Sit ultrices et, arcu posuere dolor sollicitudin lorem sed. Nisi non felis, in sem quisque neque scelerisque.",
    avatar:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864,0,1728,2304&wid=600&hei=800&scl=2.88",
    category: "Farm",
    rating: 3,
    progress: 90,
    members: [],
    createdAt: new Date(2022, 11, 17),
  },
];
