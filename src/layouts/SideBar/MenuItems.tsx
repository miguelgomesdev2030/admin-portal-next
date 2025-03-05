import { MenuItem } from "./SideBarInterFace";

export const MENUITEMS: MenuItem[] = [
  {
    title: "dashboard",
    url: `/dashboard`,
    icon: "Home",
    type: "link",
  },

  {
    title: "PRODUCT AREA",
    icon: "Box",
    type: "sub",
    menu: [
      {
        url: "/product/newexp",
        title: "New Experience",
        type: "link",
      },
    ],
  },
  {
    title: "TOURS",
    icon: "Target",
    type: "sub",
    menu: [
      {
        url: "/tours/addtour",
        title: "Add a New Tour",
        type: "link",
      },
      {
        url: "/tours/available",
        title: "Available Tours",
        type: "link",
      },
    ],
  },
  {
    title: "TRAVEL AGENT AREA",
    icon: "Bookmark",
    type: "sub",
    menu: [
      {
        url: "/travelagent/createbooking",
        title: "Create Booking",
        type: "link",
      },
      {
        url: "/travelagent/viewbookings",
        title: "View Bookings",
        type: "link",
      },
    ],
  },
  {
    title: "CUSTOMERS PORTAL",
    icon: "Navigation",
    type: "sub",
    menu: [
      {
        url: "/customers/book",
        title: "Book a Tour",
        type: "link",
      },
      {
        url: "/customers/view",
        title: "View Tours",
        type: "link",
      },
      {
        url: "/customers/me",
        title: "My Bookings",
        type: "link",
      },
    ],
  },
  {
    title: "FINANCIAL AREA",
    url: `/financial`,
    icon: "Bookmark",
    type: "link",
  },
  {
    title: "OPERATION AREA",
    url: `/operation`,
    icon: "Bookmark",
    type: "link",
  },
  {
    title: "EMPLOYEE PORTAL",
    url: `/employee`,
    icon: "Bookmark",
    type: "link",
  },
];
