export type EventItem = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Native EU",
    slug: "react-native-eu",
    location: "Wrocław, Poland",
    date: "Sep 7-8, 2026",
    time: "09:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "App.js Conf",
    slug: "app-js-conf",
    location: "Krakow, Poland",
    date: "May 22-24, 2026",
    time: "10:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "React Conf",
    slug: "react-conf",
    location: "Henderson, NV",
    date: "May 15-16, 2026",
    time: "08:30 AM",
  },
  {
    image: "/images/event4.png",
    title: "Chain React",
    slug: "chain-react",
    location: "Portland, OR",
    date: "Jul 17-19, 2026",
    time: "09:00 AM",
  },
  {
    image: "/images/event5.png",
    title: "RenderATL",
    slug: "render-atl",
    location: "Atlanta, GA",
    date: "Jun 12-14, 2026",
    time: "10:00 AM",
  },
  {
    image: "/images/event6.png",
    title: "React Advanced",
    slug: "react-advanced",
    location: "London, UK",
    date: "Oct 25-27, 2026",
    time: "09:00 AM",
  },
];
