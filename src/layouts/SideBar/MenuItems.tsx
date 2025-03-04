import { MenuItem } from "./SideBarInterFace";

export const MENUITEMS: MenuItem[] = [
  {
    title: "dashboard",
    url: `/dashboard`,
    icon: "Home",
    type: "link",
  },
  {
    title: "users",
    icon: "Users",
    type: "sub",
    menu: [
      {
        url: "/users/allusers",
        title: "All Users",
        type: "link",
      },
      {
        url: "/users/adduser",
        title: "Add New User",
        type: "link",
      },
    ],
  },
  {
    title: "Tour Packages",
    icon: "Map",
    type: "sub",
    menu: [
      {
        url: "/tour/allpackage",
        title: "All Packages",
        type: "link",
      },
      {
        url: "/tour/packagedetail",
        title: "Package's Detail",
        type: "link",
      },
      {
        url: "/tour/addpackage",
        title: "Add New Package",
        type: "link",
      },
      {
        url: "/tour/categories",
        title: "All package categories",
        type: "link",
      },
      {
        url: "/tour/addcategory",
        title: "Add package categories",
        type: "link",
      },
    ],
  },
  {
    title: "Hotel",
    icon: "Briefcase",
    type: "sub",
    menu: [
      {
        url: "/hotel/allhotels",
        title: "All hotels",
        type: "link",
      },
      {
        url: "/hotel/hotelsdetail",
        title: "hotel's Detail",
        type: "link",
      },
      {
        url: "/hotel/addhotel",
        title: "Add New hotel",
        type: "link",
      },
    ],
  },
  {
    title: "Restaurant",
    icon: "Coffee",
    type: "sub",
    menu: [
      {
        url: "/restaurant/allrestaurant",
        title: "All Restaurant",
        type: "link",
      },
      {
        url: "/restaurant/restaurantdetail",
        title: "Restaurant's Detail",
        type: "link",
      },
      {
        url: "/restaurant/addrestaurant",
        title: "Add New Restaurant",
        type: "link",
      },
      {
        url: "/restaurant/menu",
        title: "Menu Items",
        type: "link",
      },
      {
        url: "/restaurant/additem",
        title: "Add Menu Item",
        type: "link",
      },
    ],
  },
  {
    title: "Cab",
    icon: "Navigation",
    type: "sub",
    menu: [
      {
        url: "/cab/allcars",
        title: "All Cars",
        type: "link",
      },
      {
        url: "/cab/carsdetail",
        title: "Cars's Detail",
        type: "link",
      },
      {
        url: "/cab/addcars",
        title: "Add New cars",
        type: "link",
      },
      {
        url: "/cab/drivers",
        title: "All Drivers",
        type: "link",
      },
      {
        url: "/cab/adddrivers",
        title: "Add Drivers",
        type: "link",
      },
    ],
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
  {
    title: "Booking",
    url: `/booking`,
    icon: "Bookmark",
    type: "link",
  },
  {
    title: "Reviews",
    url: `/reviews`,
    icon: "MessageSquare",
    type: "link",
  },
  {
    title: "Setting",
    url: `/setting`,
    icon: "Settings",
    type: "link",
  },
  {
    title: "Log In",
    url: `/login`,
    icon: "LogIn",
    type: "link",
  },
  {
    title: "Register",
    url: `/register`,
    icon: "PlusCircle",
    type: "link",
  },
];
