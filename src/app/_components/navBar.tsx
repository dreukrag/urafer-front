import Link from "next/link";

import { SignIn } from "@/app/_components/signIn";
import { auth } from "../auth";
interface iFancyLink {
  children: React.ReactNode;
  href: string;
  className?: string;
  disabled?: boolean;
}

const FancyLink = ({ children, href, className, disabled }: iFancyLink) => {
  return (
    <Link
      className={[
        "hover:underline  text-2xl flex gap-2 items-center",
        className,
        disabled
          ? "text-textPrimaryDesaturated pointer-events-none cursor-not-allowed"
          : "text-textPrimary",
      ].join(" ")}
      href={href}
    >
      {children}{" "}
      <div
        className={[
          " h-9 w-0.5",
          disabled ? "bg-textPrimaryDesaturated" : "bg-textPrimary",
        ].join(" ")}
      />
    </Link>
  );
};

export const Navbar = async () => {
  const session = await auth();

  const isPlayDisabled = !Boolean(session?.user);

  return (
    <div className="bg-backgroundDarkSecondary w-full h-16 flex gap-2 pl-4">
      <FancyLink href="/">Home</FancyLink>
      <FancyLink href="/about">About</FancyLink>
      <FancyLink href="/contact">Contact</FancyLink>
      <FancyLink disabled={isPlayDisabled} href="/play">
        Play
      </FancyLink>

      <SignIn />
    </div>
  );
};
