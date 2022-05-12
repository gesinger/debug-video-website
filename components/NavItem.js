export default function NavItem({ className = '', href, target, children }) {
  return (
    <a href={href} target={target} className={`text-white block px-3 py-2 ${className}`}>
      {children}
    </a>
  );
}
