interface Props {
  items: string[];
}

export function ListInformation({ items }: Props): JSX.Element {
  return (
    <div className='h-fit w-full flex flex-col leading-none gap-[6px]'>
      {items.map((item, index) => (
        <div key={`item_${index}`} className='flex items-center gap-[5px] text-[18px]'>
          <div className='h-[6px] w-[6px] bg-black rounded-full' />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
