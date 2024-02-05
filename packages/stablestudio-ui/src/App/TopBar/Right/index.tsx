import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Theme } from "~/Theme";

export const Right = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownOptions = [
    {
      value: "profile",
      label: "My Profile",
      icon: <Theme.Icon.Profile width={20} height={20} />,
      link: "https://admin.tore.ai/profile",
    },
    {
      value: "billing",
      label: "Billing",
      icon: <Theme.Icon.Billing width={20} height={20} />,
      link: "https://admin.tore.ai/billing",
    },
    {
      value: "logout",
      label: "Logout",
      icon: <Theme.Icon.Settings width={20} height={20} />,
      link: "/logout",
    },
  ];

  const handleToggleDropdown = () => {
    setOpen(!open);
  };

  const handleOptionSelect = () => {
    setOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <div
      className="relative flex grow basis-0 items-center justify-end gap-2"
      ref={dropdownRef}
    >
      <div>
        <div className="inline-block border border-divider rounded-lg text-[10px] w-[320px] text-white py-1 px-2">
          <table className="w-full">
            <tbody><tr>
              <td className="w-[90px] ">
                Anytimes  Credits:
              </td>
              <td className="w-[130px]">
                <div className="w-full bg-divider rounded-full h-1 dark:bg-gray-700">
                  <div className="bg-green h-1 rounded-full" style={{ width: "60.20%" }}></div>
                </div>
              </td>
              <td className="text-right">
                5255 left
              </td>
            </tr>
              <tr>
                <td className="w-[90px] ">
                  Plan  Credits:
                </td>
                <td className="w-[130px]">
                  <div className="w-full bg-divider rounded-full h-1 dark:bg-gray-700">
                    <div className="bg-orange h-1 rounded-full" style={{ width: "0.13%" }}></div>
                  </div>
                </td>
                <td className="text-right">
                  1 / 750 left
                </td>
              </tr>
            </tbody></table>
        </div>
      </div>
      <div className=" border border-divider rounded-lg">
        <Theme.Button
          outline
          label="Settings"
          labelPlacement="bottom"
          className="aspect-square h-[30px] w-[30px]"
          icon={Theme.Icon.Settings}
          onClick={handleToggleDropdown}
        />
      </div>

      {open && (
        <div className="absolute right-2 top-9 z-20 border-[0.5px] border-[#326E77] bg-[#0D434B]">
          {dropdownOptions.map((option) => (
            <Link to={option.link} key={option.value}>
              <button
                className="block w-52 border-b-[1px] border-b-[#326E77] px-4 py-4 text-sm text-white hover:bg-[#326E77]"
                onClick={() => handleOptionSelect()}
                role="menuitem"
              >
                <div className="flex items-center gap-2">
                  {option.icon}
                  {option.label}
                </div>
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
