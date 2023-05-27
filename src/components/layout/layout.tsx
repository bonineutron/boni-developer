interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return <div className='w-screen h-screen'>{children}</div>;
}
