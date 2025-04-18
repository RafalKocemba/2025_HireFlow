type AvatarRepresentationProps = {
  children: React.ReactNode;
  color: string | null;
};

export function AvatarRepresentation({
  children,
  color = null,
}: AvatarRepresentationProps) {
  return (
    <div
      className={`m-auto mb-3 h-20 w-20 items-center justify-center rounded-2xl sm:hidden md:h-full md:w-full lg:flex`}
      style={{ backgroundColor: color ?? "#d9d9d9" }}
    >
      {children}
    </div>
  );
}
