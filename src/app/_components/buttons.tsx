interface iDefaultButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  extendClassName?: boolean;
}

export const DefaultButton = ({
  className,
  extendClassName,
  children,
  ...props
}: iDefaultButton) => {
  let buttonClassName = [
    "border-textPrimary border-2 rounded-lg w-fit px-4 text-textPrimary hover:bg-textPrimary hover:text-backgroundSecondary flex gap-2",
  ];

  if (extendClassName === true && className) {
    buttonClassName.push(className);
  } else if (className) {
    buttonClassName = [className];
  }

  return (
    <button {...props} className={buttonClassName.join(" ")}>
      {children}
    </button>
  );
};
