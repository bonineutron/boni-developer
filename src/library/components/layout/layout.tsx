import { SparksBackground } from './child-components/sparks-background/sparks-background';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div id='layout' className='relative h-[100dvh] w-screen overflow-hidden'>
      <SparksBackground />
      {children}
    </div>
  );
}
