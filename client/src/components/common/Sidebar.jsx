/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Student from "../icons/Student";
import Faculty from "../icons/User";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { sidebarItems } from "@/data/sidebarItems";
import Dashboard from "../icons/Dashboard";

const Sidebar = ({ role }) => {
  return (
    <ScrollArea>
      <div className="flex flex-col p-2 gap-y-3 md:p-6">
        <div className="space-y-4">
          <div className="px-3 py-3">
            <Link to={`/${role}`}>
              <Button
                variant="ghost"
                className="justify-start w-full text-lg font-semibold tracking-tight"
              >
                <Dashboard />
                Dashboard
              </Button>
            </Link>
          </div>

          {role === "admin" && (
            <div className="px-3 py-3">
              <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
                Users
              </h2>
              <div className="space-y-1">
                <Link to="/admin/students">
                  <Button variant="ghost" className="justify-start w-full">
                    <Student />
                    Students
                  </Button>
                </Link>

                <Link to="/admin/faculty">
                  <Button variant="ghost" className="justify-start w-full">
                    <Faculty />
                    Faculty
                  </Button>
                </Link>
              </div>
            </div>
          )}

          <div className="px-3 py-2">
            <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
              Resources
            </h2>
            <div className="space-y-1">
              {sidebarItems[role].map((item, index) => (
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

export default Sidebar;
