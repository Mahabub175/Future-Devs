import { FaHome } from "react-icons/fa";

export const userSidebarRoutes = [
  {
    name: "Dashboard",
    path: "",
    icon: FaHome,
  },
  {
    name: "Manage Account",
    icon: FaHome,
    children: [
      {
        name: "My Profile",
        path: "my-profile",
        icon: FaHome,
      },
      {
        name: "Address",
        path: "address",
        icon: FaHome,
      },
      {
        name: "Payment Option",
        path: "payment-option",
        icon: FaHome,
      },
      {
        name: "Gift Card",
        path: "salary-settings",
        icon: FaHome,
      },
    ],
  },
];
