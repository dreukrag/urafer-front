"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface iFancyLink {
  children: React.ReactNode;
  href: string;
  className?: string;
  disabled?: boolean;
}
export const FancyLink = ({
  children,
  href,
  className,
  disabled,
}: iFancyLink) => {
  const isCurrentRoute = usePathname() === href;

  const linkClasses = [className, "hover:underline  text-2xl flex gap-2 items-center"];
  const detailClasse = ["h-9 w-0.5"];

  if (disabled) {
    linkClasses.push(
      "text-textPrimaryDesaturated pointer-events-none cursor-not-allowed"
    );
    detailClasse.push("bg-textPrimaryDesaturated");
  } else {
    linkClasses.push("text-textPrimary");
    detailClasse.push("bg-textPrimary");
  }

  if (isCurrentRoute) {
    linkClasses.push("font-extrabold");
  }

  return (
    <Link className={linkClasses.join(" ")} href={href}>
      {children}
      <div className={detailClasse.join(" ")} />
    </Link>
  );
};
