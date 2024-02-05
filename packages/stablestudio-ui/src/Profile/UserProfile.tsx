import { Theme } from "~/Theme";
import { Button } from "~/Theme/Button";
import { Divider } from "~/Theme/Divider";
import { Input } from "~/Theme/Input";

export function UserProfile() {
  return (
    <div>
      <header className="my-5 px-5">
        <h1 className="text-2xl font-bold">My Profile</h1>
        <div className="my-3 text-sm font-normal opacity-50">
          Update your account profile and login details.
        </div>
      </header>
      <Divider />

      <div className="px-5">
        <h3 className="pb-2 pt-5 text-xl font-medium">Basic Info</h3>
        <div className="flex gap-4 py-4">
          <div className="w-full">
            <div className="text-base font-normal">First Name</div>
            <Input
              onChange={() => null}
              className="mt-2 rounded-xl border-2 border-transparent p-3 focus:border-[#A3DB07]"
              placeholder="Your First Name"
            />
          </div>
          <div className="w-full">
            <div className="text-base font-normal">Last Name</div>
            <Input
              onChange={() => null}
              className="mt-2 rounded-xl border-2 border-transparent p-3 focus:border-[#A3DB07]"
              placeholder="Your Last Name"
            />
          </div>
        </div>
        <div className="pb-8">
          <div className="text-base font-normal">Email Address</div>
          <Input
            onChange={() => null}
            className="mt-2 rounded-xl border-2 border-transparent p-3 focus:border-[#A3DB07]"
            placeholder="jonathan@doe.com"
          />
        </div>
        <div className="flex justify-end pb-8">
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
      <Divider />
      <div className="px-5">
        <h3 className="pb-2 pt-5 text-xl font-medium">Password</h3>
        <div className="flex gap-4 py-4">
          <div className="w-full">
            <div className="text-base font-normal">Change Password</div>
            <Input
              onChange={() => null}
              className="mt-2 rounded-xl border-2 border-transparent p-3 focus:border-[#A3DB07]"
              placeholder="Input New Password"
              type="password"
            />
          </div>
          <div className="w-full">
            <div className="text-base font-normal">Re-Type Password</div>
            <Input
              onChange={() => null}
              className="mt-2 rounded-xl border-2 border-transparent p-3 focus:border-[#A3DB07]"
              placeholder="Re-Type the Password"
              type="password"
            />
          </div>
        </div>
        <div className="flex justify-end pb-8 pt-4">
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
      <Divider />
    </div>
  );
}
