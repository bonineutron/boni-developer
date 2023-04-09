export type ButtonProps = {
  content: string | JSX.Element;
  height?: string;
  width?: string;
  background?: string;
  textColor?: string;
  disabled?: true;
  customClass?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export function Button({ content, height, width, background, textColor, disabled, customClass, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled || false}
      className={`flex justify-center items-center ${!background && 'bg-gray-200'} ${customClass || ''}`}
      style={{ height: height || '', width: width || '', background: background || '', color: textColor }}>
      {content}
    </button>
  );
}
