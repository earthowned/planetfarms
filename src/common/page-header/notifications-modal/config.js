import dayjs from "dayjs";

const generateCurrentDate = () => {
  const dateFormat = "MMM D, YYYY";
  const timeFormat = "HH:mm A";
  return { date: dayjs().format(dateFormat), time: dayjs().format(timeFormat) };
};

const { date, time } = generateCurrentDate();

export const navTabs = [
  { title: "All Notifications", badge: 4 },
  { title: "Messages", badge: 5 },
];

export const mockedNotifications = [
  {
    id: "1111",
    message: "A new member has joined your community",
    createdAt: `${date} at ${time}`,
    imageUrl:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: "2222",
    message: "There is news in the community",
    createdAt: `${date} at ${time}`,
  },
  {
    id: "3333",
    message: "A new member has joined your community",
    createdAt: `${date} at ${time}`,
    imageUrl:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybXxlbnwwfHwwfHw%3D&w=1000&q=80",
  },
  {
    id: "4444",
    message: "There is news in the community",
    createdAt: `${date} at ${time}`,
  },
];

export const mockedMessages = [
  {
    id: "1111",
    from: "Jenny Wilson:",
    message: "Bulls at rose garden cucumbers mice sunflower wheat in pig. ...",
    createdAt: `${date} at ${time}`,
  },
  {
    id: "2222",
    from: "Jenny Wilson:",
    message: "Bulls at rose garden cucumbers mice sunflower wheat in pig. ...",
    createdAt: `${date} at ${time}`,
    imageUrl:
      "https://agfundernews.com/wp-content/uploads/2022/01/Corteva-Image-Final-e1642079317844.jpg",
  },
  {
    id: "3333",
    from: "Jenny Wilson:",
    message: "Bulls at rose garden cucumbers mice sunflower wheat in pig. ...",
    createdAt: `${date} at ${time}`,
    imageUrl:
      "https://agfundernews.com/wp-content/uploads/2022/01/Corteva-Image-Final-e1642079317844.jpg",
  },
  {
    id: "4444",
    from: "Jenny Wilson:",
    message: "Bulls at rose garden cucumbers mice sunflower wheat in pig. ...",
    createdAt: `${date} at ${time}`,
    imageUrl:
      "https://agfundernews.com/wp-content/uploads/2022/01/Corteva-Image-Final-e1642079317844.jpg",
  },
  {
    id: "5555",
    from: "Jenny Wilson:",
    message: "Bulls at rose garden cucumbers mice sunflower wheat in pig. ...",
    createdAt: `${date} at ${time}`,
  },
];
