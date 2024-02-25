import { Link } from "react-router-dom";

import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

import Dashboard from "../icons/Dashboard";
import { UsersidebarItems } from "@/data/sidebarItems";

const UserSidebar = () => {
  return (
    <ScrollArea>
      <div className="flex flex-col p-2 gap-y-3 md:p-6">
        <div className="space-y-4">
          <div className="px-3 py-3">
            <Link to="/user">
              <Button
                variant="ghost"
                className="justify-start w-full text-lg font-semibold tracking-tight"
              >
                <Dashboard />
                Dashboard
              </Button>
            </Link>
          </div>

        
          <div className="px-3 py-2">
            <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
              Resources
            </h2>
            <div className="space-y-1">
              {UsersidebarItems.map((item, index) => (
                <Link key={index} to={item.link}>
                  <Button variant="ghost" className="justify-start w-full">
                    {item.icon}
                    {item.text}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default UserSidebar;
