type BasicTextareaProps = {
  name: string;
  defaultValue?: string;
  limit?: number;
  placeholder?: string;
  className?: string;
  inputStyles?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void;
};

export function BasicTextarea({
  name,
  defaultValue,
  placeholder = "",
  className = "",
  inputStyles = "",
  limit,
  value,
  onChange,
  onClick,
}: BasicTextareaProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        maxLength={limit}
        value={value}
        onChange={onChange}
        onClick={onClick}
        spellCheck={false}
        className={`scrollbar-hide h-full resize-none focus-visible:outline-none ${inputStyles}`}
      />
    </div>
  );
}
