import React, { useState } from "react";
import { Theme } from "~/Theme";
import { Button } from "~/Theme/Button";
import { Divider } from "~/Theme/Divider";

export function Billing() {
  const [open, setOpen] = useState(true);

  function handleClose() {
    setOpen(false);
  }

  const planOptions = [
    {
      value: "1000",
      label: "1,000 credits/mo",
      price: "$19/mo",
    },
    {
      value: "5000",
      label: "5,000 credits/mo",
      price: "$29/mo",
    },
    {
      value: "10000",
      label: "10,000 credits/mo",
      price: "$39/mo",
    },
    {
      value: "20000",
      label: "20,000 credits/mo",
      price: "$49/mo",
    },
    {
      value: "30000",
      label: "30,000 credits/mo",
      price: "$59/mo",
    },
  ];

  return (
    <div>
      <header className="my-5 px-5">
        <h1 className="text-2xl font-bold">Plans</h1>
        <div className="my-3 text-sm font-normal opacity-50">
          Manage your payment method and plan.
        </div>
      </header>
      <Divider />

      <div className="px-5">
        <h3 className="pb-2 pt-5 text-xl font-medium">Activated Plans</h3>

        <Theme.Modal modalName="Reset" open={open} onClose={handleClose}>
          <Theme.Modal.Panel className="gap-5">
            <Theme.Modal.Description>
              <div className="group relative w-full overflow-hidden rounded-md">
                <div className="flex">
                  <div className="p-3 text-white">
                    <h1 className="text-4xl">Subscribe & Save</h1>
                    <p>Save up to 50% on credits by subscribing to a plan.</p>
                  </div>
                  <img src="/subscribe.png" alt="Subscribe" />
                </div>
                <div className="w-full p-3">
                  <Theme.Dropdown options={planOptions} fullWidth />
                </div>
                <div className="flex p-3">
                  <Theme.Button
                    size="lg"
                    color="brand"
                    icon={Theme.Icon.Subscribe}
                    onClick={() => null}
                    className="w-full"
                  >
                    Subscribe
                  </Theme.Button>
                </div>
              </div>
            </Theme.Modal.Description>
          </Theme.Modal.Panel>
        </Theme.Modal>

        <div className="w-full rounded-lg border-2 border-[#327A85] pt-3 hover:border-[#A7E000]">
          <div className="flex items-center justify-between px-4">
            <div className="opacity-50">Active Plan:</div>
            <div className="flex items-center">
              <div className="text-2xl font-medium">$39</div>
              <div className="opacity-50">/mo</div>
            </div>
          </div>
          <h3 className="px-4 text-2xl font-medium">Standard Plan</h3>
          <div className="flex items-center justify-between px-4 pb-4">
            <div className="opacity-50">Plan renews on Apr 23, 2024</div>
            <Button
              onClick={() => null}
              iconLeft={<Theme.Icon.Close width={22} height={22} />}
              className="gap-3 !rounded-lg !bg-[#002E35] px-5 py-3"
            >
              Cancel Plan
            </Button>
          </div>
          <div className="flex w-full items-center justify-around rounded-b-lg bg-[#13535C] px-4 py-3">
            <div>Plan Credits:</div>
            <div className="h-2.5 w-3/5 rounded-full bg-[#326E77]">
              <div className="h-2.5 w-1/3 rounded-full bg-[#A8E001]"></div>
            </div>
            <div>511 / 1,000</div>
          </div>
        </div>

        <div className="mt-4 flex justify-end pb-8">
          <Button
            className={
              "gap-3 rounded-lg !bg-[#A7E000] px-12 py-3 font-bold !text-[#002E35]"
            }
            onClick={() => null}
            iconLeft={<Theme.Icon.Floppy width={22} height={22} />}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
