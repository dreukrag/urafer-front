import { SignIn } from "@/app/_components/signIn";
import { auth } from "../auth";
interface TLink {
  children: React.ReactNode;
  href: string;
  className?: string;
  disabled?: boolean;
}

const Link = ({ children, href, className, disabled }: TLink) => {
  return (
    <a
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
    </a>
  );
};

export const Navbar = async () => {
  const session = await auth();

  const isPlayDisabled = !Boolean(session?.user);

  return (
    <div className="bg-backgroundDarkSecondary w-full h-16 flex gap-2 pl-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link disabled={isPlayDisabled} href="/play">
        Play
      </Link>

      <SignIn />
    </div>
  );
};
