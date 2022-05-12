import NavItem from './NavItem';
import ExternalLink from './ExternalLink';
import Logo from './Logo';

export default function NavBar() {
  return (
    <div className="mt-3 mb-3">
      <nav className="flex mx-8 mt-6 text-xl">
        <div className="w-14 h-14">
          <Logo />
        </div>
        <h4 className="mt-2.5 ml-3">debug.video</h4>
        <NavItem
          className="ml-auto"
          href="http://github.com/gesinger/debug-video"
          target="_blank"
        >
          <div className="flex space-x-2 border p-1 px-2 rounded-lg hover:bg-violet-600">
            <div>GitHub</div>
            <div className="mt-0.5">
              <ExternalLink />
            </div>
          </div>
        </NavItem>
      </nav>
    </div>
  );
}
