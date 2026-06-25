import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard layout",
};

function DashBoardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className=" mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-red-600">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className=" mx-auto py-6 ">{children}</div>
      </main>
    </div>
  );
}

export default DashBoardLayout;
