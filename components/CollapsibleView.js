import ChevronDown from './ChevronDown';
import ChevronRight from './ChevronRight';

export default function CollapsibleView({
  className,
  children,
  title,
  isShowing,
  setIsShowing,
}) {
  const chevronClass = 'w-6 h-6';

  return (
    <div className={`${className || ''} box`}>
      <div className="flex">
        <button
          className="w-full text-2xl text-primary-50 hover:text-secondary-200"
          onClick={() => setIsShowing(!isShowing)}
        >
          {isShowing &&
            <div className="mt-1">
              <ChevronDown className={chevronClass} />
            </div>
          }
          {!isShowing &&
            <div className="flex">
              <div className="mt-1">
                <ChevronRight className={chevronClass} />
              </div>
              <span className="ml-2">{title}</span>
            </div>
          }
        </button>
      </div>
      {isShowing && children}
    </div>
  );
}
