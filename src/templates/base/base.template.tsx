import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import ScrollToTop from "src/components/scroll-to-top";

export function BaseTemplate() {
  return (
    <ScrollToTop>
      <Header />

      {/* Suspense + Lazy load: trong quá trình đợi download file js về thì render ra component fallback. Khi nào xong thì render ra vào chỗ Outlet */}
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
      <Footer />
    </ScrollToTop>
  );
}
