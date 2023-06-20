import { Backgroundtransition, SimpleScroll, LowBar } from '../../components';

export function HomeTemplate() {
  return (
    <div id='home-template' className='h-[100dvh] flex items-center'>
      <img src='/images/boni-dev-md.svg' alt='logo' className='mx-auto w-[200px]' />
      <Backgroundtransition />
      <SimpleScroll />
      <LowBar />
    </div>
  );
}
