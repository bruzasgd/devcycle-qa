
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-8xl font-bold text-primary mb-4 animate-fade-in">404</h1>
        <p className="text-2xl text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Oops! Page not found
        </p>
        <p className="text-foreground/60 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white shadow-sm hover:shadow-md transition-all animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <ArrowLeft size={18} className="mr-2" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
