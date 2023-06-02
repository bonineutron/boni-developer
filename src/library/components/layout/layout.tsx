interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div id='layout' className='relative w-screen h-screen'>
      {children}
    </div>
  );
}
