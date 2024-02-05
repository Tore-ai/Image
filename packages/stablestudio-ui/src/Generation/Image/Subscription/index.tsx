import { Link } from "react-router-dom";
import { Theme } from "~/Theme";

export function Subscription() {
  return (
    <div className="border-brand-600 group relative mt-3 w-full overflow-hidden rounded-md border">
      <div className="flex">
        <div className="p-3 text-white">
          <h1 className="text-4xl">Subscribe & Save</h1>
          <p>Save up to 50% on credits by subscribing to a plan.</p>
        </div>
        <img src="/subscribe.png" alt="Subscribe" />
      </div>
      <div className="flex p-3">
        <Link
          className="w-full"
          to="https://admin.tore.ai/billing"
          target="_blank"
        >
          <Theme.Button
            size="lg"
            color="brand"
            icon={Theme.Icon.Subscribe}
            className="w-full"
          >
            Subscribe
          </Theme.Button>
        </Link>
      </div>
    </div>
  );
}
