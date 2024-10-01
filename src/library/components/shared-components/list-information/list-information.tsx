interface Props {
   items: string[];
   desktop?: boolean;
}

export function ListInformation({ items, desktop }: Props): JSX.Element {
   return (
      <div
         className={`h-fit w-full flex leading-none ${
            desktop ? 'flex-row items-center justify-between flex-wrap gap-[2%] gap-y-1 px-3' : 'flex-col gap-[6px]'
         }`}>
         {items.map((item, index) => (
            <div
               key={`item_${index}`}
               className={`flex items-center gap-[5px] text-[18px] ${desktop ? 'w-[49%]' : ''}`}>
               <div className={`h-[6px] w-[6px] bg-black rounded-full`} />

               <span>{item}</span>
            </div>
         ))}
      </div>
   );
}
