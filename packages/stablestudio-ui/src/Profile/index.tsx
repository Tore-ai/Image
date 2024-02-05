import { Link, useLocation } from "react-router-dom";

import { Theme } from "~/Theme";

import { Billing } from "./Billing";
import { Sidebar } from "./Sidebar";
import { UserProfile } from "./UserProfile";

export function Profile() {
  const location = useLocation();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex h-full w-full grow overflow-hidden">
        <div className="h-full w-1/2 bg-zinc-800">
          <div className="px-5">
            <Link to="/generate" className="w-fit ">
              <div className="my-5 -ml-1 flex gap-1 text-lg opacity-50 hover:opacity-100">
                <Theme.Icon.ChevronLeft className="h-6 w-6" />
                Back to Application
              </div>
            </Link>
          </div>
          {(location.pathname.startsWith("/profile") ||
            location.pathname.startsWith("/settings")) && <UserProfile />}
          {location.pathname.startsWith("/billing") && <Billing />}
        </div>
        <div className="w-1/2 bg-[#002E35]"></div>
      </div>
    </div>
  );
}
