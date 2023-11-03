import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6 flex gap-2 items-center justify-center">
        <Logo />
        <p className="text-2xl font-bold text-green-700 uppercase italic">
          Coursely
        </p>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
