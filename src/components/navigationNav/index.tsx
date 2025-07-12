const NavigationNav = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="p-2">
      <ul>{children}</ul>
    </nav>
  );
};
export default NavigationNav;
