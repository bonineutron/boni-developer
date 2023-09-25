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
      <h1 className='text-[18px] italic leading-none'>{subTitle}</h1>
      <div className='h-[1px] w-full bg-black rounded-full mt-[10px] mb-[8px]' />
      <SeeMoreInformation paragraph={description} limit={15} children={seeMoreComponent} />
    </div>
  );
}
