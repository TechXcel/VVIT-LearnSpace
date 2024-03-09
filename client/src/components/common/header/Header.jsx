import { Link, useNavigate } from "react-router-dom";
import MainNav from "./MainNav";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";
import {
  SquaresPlusIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowUturnRightIcon,
} from "@heroicons/react/24/outline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Dashboard from "@/components/icons/Dashboard";

const Header = () => {
  const navigate = useNavigate();
  const { token, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSignout = () => {
    dispatch(logout());
    navigate("/auth/signin");
  };
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-14 max-w-screen-2xl">
        <MainNav />
        <MobileNav />
        <div className="flex items-center justify-end flex-1 space-x-2">
          <nav className="flex items-center space-x-2">
            {token ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shaikahmadnawaz.png"
                      alt="avatar"
                    />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-36">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Link
                        className="flex items-center justify-between w-full"
                        to={`${role}`}
                      >
                        <span>Dashboard</span>
                        <DropdownMenuShortcut>
                          <SquaresPlusIcon className="w-4 h-4" />
                        </DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        className="flex items-center justify-between w-full"
                        to={`${role}`}
                      >
                        <span>Profile</span>
                        <DropdownMenuShortcut>
                          <UserCircleIcon className="w-4 h-4" />
                        </DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Link
                        className="flex items-center justify-between w-full"
                        to={`${role}`}
                      >
                        <span>Settings</span>
                        <DropdownMenuShortcut>
                          <Cog6ToothIcon className="w-4 h-4" />
                        </DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={handleSignout}
                  >
                    <span>Log out</span>
                    <DropdownMenuShortcut>
                      <ArrowUturnRightIcon className="w-4 h-4" />
                    </DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth/signin">
                <Button>Sign In</Button>
              </Link>
            )}

            <ModeToggle />
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
