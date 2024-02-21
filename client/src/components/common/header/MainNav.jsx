import Education from "@/components/icons/Education";
import { navLinks } from "@/data/navLinks";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div className="hidden mr-4 md:flex">
      <Link to="/" className="flex items-center mr-6 space-x-2">
        <Education />
        {/* <Icons className="w-6 h-6" /> */}
        <span className="hidden font-bold sm:inline-block">LearnSpace</span>
      </Link>

      <nav className="flex items-center gap-6 text-sm">
        {navLinks.map((link, index) => (
          <Link
            to={link.url}
            key={index}
            className="transition-colors hover:text-foreground text-foreground/80"
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainNav;
