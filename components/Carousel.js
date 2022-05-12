import { useState } from 'react';
import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import { useSpring, animated, useTransition } from '@react-spring/web'

const NavigationDot = ({ isSelected, setSelected }) => {
  const props = useSpring({
    transform: isSelected ? 'scale(1.5)' : 'scale(1)',
  });
  const hoverClass = isSelected ? 'cursor-default' : 'hover:bg-violet-600';

  return (
    <animated.button
      className={`block rounded-xl w-2 h-2 bg-primary-50 ${hoverClass}`}
      style={props}
      onClick={setSelected}
    />
  );
};

const NavigationDots = ({ selectedIndex, setSelectedIndex, numDots }) => {
  const dots = [];

  for (let i = 0; i < numDots; i++) {
    dots.push((
      <NavigationDot
        key={`item-button-${i}`}
        isSelected={selectedIndex === i}
        setSelected={() => setSelectedIndex(i)}
      />
    ));
  }

  return dots;
};

const Item = ({ item }) => {
  return (
    <div>
      <div>
        <h3>{item.header}</h3>
        <div className="mt-2">{item.subHeader}</div>
      </div>
      <div className="landing-image-container">
        <img src={item.image.src} alt={item.image.alt} />
      </div>
    </div>
  );
};

export default function Carousel({ header, items }) {
  const [moveReverse, setMoveReverse] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedItem = items[selectedIndex];
  const transitions = useTransition(selectedItem, {
    from: {
      opacity: 0,
      transform: moveReverse ? 'translateX(-100%)' : 'translateX(100%)',
      position: 'static',
    },
    enter: {
      opacity: 1,
      transform: 'translateX(0%)',
      position: 'static',
    },
    leave: {
      opacity: 0,
      transform: moveReverse ? 'translateX(50%)' : 'translateX(-50%)',
      position: 'absolute',
    },
  });

  return (
    <div className='carousel'>
      <div className="mt-8 flex">
        {items.length > 1 && (
          <button
            className="w-12 hover:text-violet-600"
            onClick={() => {
              setMoveReverse(true);
              setSelectedIndex(selectedIndex === 0 ? items.length - 1 : selectedIndex - 1)
            }}
          >
            <ChevronLeft />
          </button>
        )}
        <div className={`relative overflow-hidden ${items.length === 1 ? 'ml-12' : ''}`}>
          {transitions((props, item) => (
            <animated.div style={props}>
              <Item item={item} />
            </animated.div>
          ))}
        </div>
        {items.length > 1 && (
          <button
            className="w-12 hover:text-violet-600"
            onClick={() => {
              setMoveReverse(false);
              setSelectedIndex(selectedIndex === items.length - 1 ? 0 : selectedIndex + 1)
            }}
          >
            <ChevronRight />
          </button>
        )}
      </div>
      {items.length > 1 && (
        <div className="mt-12 flex space-x-4 justify-center">
          <NavigationDots
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            numDots={items.length}
          />
        </div>
      )}
    </div>
  );
}
