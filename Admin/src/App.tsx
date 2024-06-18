import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MacBookPro from "./pages/MacBookPro";
import MacBookPro1 from "./pages/MacBookPro1";
import MacBookPro2 from "./pages/MacBookPro2";
import MacBookPro3 from "./pages/MacBookPro3";
import MacBookPro4 from "./pages/MacBookPro4";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-pro-3":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-pro-4":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-pro-5":
        title = "";
        metaDescription = "";
        break;
      case "/macbook-pro-6":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MacBookPro />} />
      <Route path="/macbook-pro-3" element={<MacBookPro1 />} />
      <Route path="/macbook-pro-4" element={<MacBookPro2 />} />
      <Route path="/macbook-pro-5" element={<MacBookPro3 />} />
      <Route path="/macbook-pro-6" element={<MacBookPro4 />} />
    </Routes>
  );
}
export default App;
