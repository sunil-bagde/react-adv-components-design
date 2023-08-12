import { Link, Outlet, useParams } from "react-router-dom";
import { ToggleDemo } from "@/components/Toggle/toggle-demo";
import { pathList } from "./";

 
 

export function Root() {
 
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Link
            to="/"
            className="flex items-center   text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <h1 className="font-bold text-xl ">Components list</h1>
          </Link>

          <ul className="space-y-2 pt-3 font-medium">
            {pathList[0]?.children?.map(({ displayName, path }) => {
              return (
                <li key={displayName}>
                  <Link
                    to={`${path}`}
                    className="flex items-center   text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <span className="flex-1 whitespace-nowrap">{displayName}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg  border-gray-300">
          <Outlet />
        </div>
      </div>
    </>
  );
}
