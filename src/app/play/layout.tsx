import { redirect } from "next/navigation";
import { auth } from "../auth";

export default async function PlayLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const hasSession = await auth();

  if (Boolean(hasSession?.user) === false) {
    redirect("/");
  }

  return (
    <>
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
    </>
  );
}
