import { SearchIcon } from "lucide-react";
import { ReactNode } from "react";
import { Input } from "./ui/input";
import UserNav from "./user-nav";

const UserHeader = ({ headerName }: { headerName?: ReactNode | string }) => {
  return (
    <>
      {/* {pathname.includes("admin-dashboard") && <TopNav links={topNav} />} */}

      {/* {!pathname.includes("admin-dashboard") && (
            )} */}

      <p className="font-bold text-sm md:text-1xl">{headerName}</p>
      <div className="ml-auto flex items-center space-x-2 ">
        <div className="relative ml-auto flex-1 md:grow-0">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            className="w-full h-8 rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
            placeholder="Search..."
            type="search"
          />
        </div>
        {/* <ModeToggle /> */}
        <UserNav />
      </div>
    </>
  );
};
export default UserHeader;
