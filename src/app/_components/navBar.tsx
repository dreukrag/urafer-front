import { SignIn } from "@/app/_components/signIn";
import { auth } from "../auth";
import { FancyLink } from "./FancyLink";
import { LoggedIn } from "./loggedIn";

export const Navbar = async () => {
  const session = await auth();

  const isSignedIn = Boolean(session?.user);

  const isPlayDisabled = !isSignedIn;

  return (
    <div className="bg-backgroundDarkSecondary w-full h-16 flex gap-2 pl-4">
      <FancyLink href="/">Home</FancyLink>
      <FancyLink href="/about">About</FancyLink>
      <FancyLink href="/contact">Contact</FancyLink>
      <FancyLink disabled={isPlayDisabled} href="/play">
        Play
      </FancyLink>
      <FancyLink disabled={isPlayDisabled} href="/play/setup">
        Setup
      </FancyLink>

      {isSignedIn ? <LoggedIn /> : <SignIn />}
    </div>
  );
};
