import { useNavigate } from "react-router-dom";
import { Theme } from "~/Theme";
import { Button } from "~/Theme/Button";
import { Divider } from "~/Theme/Divider";

export function Sidebar() {
  const navigate = useNavigate();

  function handleClick(ref: string) {
    navigate(ref);
  }

  return (
    <>
      <div className="w-1/5 border-r-2 border-[#326E77] bg-zinc-800">
        <h3 className="p-5 text-lg">Menu</h3>
        <Button
          active={location.pathname.startsWith("/profile") && true}
          className={"w-full !justify-start gap-3 rounded-none p-4 font-medium"}
          onClick={() => handleClick("https://admin.tore.ai/profile")}
          iconLeft={<Theme.Icon.Profile width={22} height={22} />}
        >
          My Profile
        </Button>
        <Divider />
        <Button
          active={location.pathname.startsWith("/billing") && true}
          className="w-full !justify-start gap-3 rounded-none p-4 font-medium"
          onClick={() => handleClick("https://admin.tore.ai/billing")}
          iconLeft={<Theme.Icon.Billing width={22} height={22} />}
        >
          Billing / Plan
        </Button>
        <Divider />
      </div>
    </>
  );
}
