import { SeeMoreInformation } from 'components';

interface Props {
   title: string;
   subTitle: string;
   description: string;
   seeMoreComponent: JSX.Element;
}

export function Detail({ title, subTitle, description, seeMoreComponent }: Props): JSX.Element {
   return (
      <div className='h-fit w-full'>
         <h2 className='text-[30px] font-medium leading-none mb-2'>{title}</h2>
         <h1 className='text-[18px] italic leading-none font-medium mb-2'>{subTitle}</h1>
         <SeeMoreInformation paragraph={description} limit={11} children={seeMoreComponent} />
      </div>
   );
}
