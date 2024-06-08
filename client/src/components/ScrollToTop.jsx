import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//TODO: //To get the screen always scrolled to top when the path changes within the website

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
