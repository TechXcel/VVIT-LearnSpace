import { Link, useNavigate } from "react-router-dom";
import MainNav from "./MainNav";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/redux/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
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
              <Button className="font-semibold" onClick={handleSignout}>
                Sign Out
              </Button>
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
