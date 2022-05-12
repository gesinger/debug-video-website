export default function FeaturesBox({ type, href, extensions = [] }) {
  return (
    <a className="text-white" href={href}>
      <div
        className={
          'mt-4 p-4 border border-gray-600 rounded-xl flex space-x-2' +
          'hover:text-violet-600 hover:border-violet-600'
        }
      >
        <h4>{type}</h4>
        <div className="ml-2 text-xs">{extensions.join(' | ')}</div>
      </div>
    </a>
  );
}
