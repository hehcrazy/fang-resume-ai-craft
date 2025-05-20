import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-6 md:px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link to="/" className="font-bold text-resume-primary">
              RESUMEREVAMPAI
            </Link>
            <p className="text-sm text-muted-foreground">
              AI-powered resume builder and checker for professional resumes.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Features</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/builder" className="hover:text-resume-primary">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link to="/checker" className="hover:text-resume-primary">
                  Resume Checker
                </Link>
              </li>
              <li>
                <Link to="/templates" className="hover:text-resume-primary">
                  Resume Templates
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/blog" className="hover:text-resume-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-resume-primary">
                  Resume Guides
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-resume-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-resume-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-resume-primary">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t py-6 md:flex-row">
          <p className="text-xs text-muted-foreground">
            © 2025 RESUMEREVAMPAI. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-resume-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-resume-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
