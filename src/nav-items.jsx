import { HomeIcon, UserPlusIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import EarlyAccess from "./pages/EarlyAccess.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Early Access",
    to: "/early-access",
    icon: <UserPlusIcon className="h-4 w-4" />,
    page: <EarlyAccess />,
  },
];
