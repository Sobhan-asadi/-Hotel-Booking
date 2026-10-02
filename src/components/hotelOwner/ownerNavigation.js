import {
  HiOutlineHome,
  HiOutlinePlus,
  HiOutlineViewList,
} from "react-icons/hi";

export const ownerNavigation = [
  {
    name: "Overview",
    description: "Property performance",
    path: "/owner",
    icon: HiOutlineHome,
    end: true,
  },
  {
    name: "Add room",
    description: "Create a new listing",
    path: "/owner/add-room",
    icon: HiOutlinePlus,
  },
  {
    name: "Manage rooms",
    description: "Room inventory",
    path: "/owner/list-room",
    icon: HiOutlineViewList,
  },
];
