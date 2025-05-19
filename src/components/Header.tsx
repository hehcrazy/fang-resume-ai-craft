
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container flex items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-resume-primary">ResumeAI</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-resume-primary">
            Home
          </Link>
          <Link to="/builder" className="text-sm font-medium transition-colors hover:text-resume-primary">
            Resume Builder
          </Link>
          <Link to="/checker" className="text-sm font-medium transition-colors hover:text-resume-primary">
            Resume Checker
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button asChild variant="ghost" size="sm" className="hidden md:flex">
            <Link to="/builder">Get Started</Link>
          </Button>
          <Button asChild size="sm" className="bg-resume-primary hover:bg-resume-secondary">
            <Link to="/builder">Build Resume</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
