import DashboardNav from "@/components/navbar/DashboardNav";
import { Suspense } from "react";

const MainLayout = ({ children }) => {
  return (
    <main>
      <div className="w-full">
        <Suspense fallback={<h2>Loading Nav..</h2>}>
          <DashboardNav />
        </Suspense>
      </div>
      <div className="pt-10">{children}</div>
    </main>
  );
};

export default MainLayout;
