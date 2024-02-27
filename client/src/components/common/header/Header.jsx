import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center h-14 max-w-screen-2xl">
        <MainNav />
        <MobileNav />
        <div className="flex items-center justify-end flex-1 space-x-2">
          <nav className="flex items-center space-x-2">
            <Link to="/auth/signin">
              <Button className="font-semibold">Sign In</Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Header;
