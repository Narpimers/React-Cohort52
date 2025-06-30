import './App.css';
import { BeanHead } from 'beanheads/dist/beanheads.cjs.production.min.js';
import useWindowSize from './WindowHook/WindowHook.jsx';

function App() {
  const [height, width] = useWindowSize();

  const Ilias = (
    <BeanHead
      accessory="shades"
      body="chest"
      circleColor="blue"
      clothing="dressShirt"
      clothingColor="green"
      eyebrows="serious"
      eyes="simple"
      faceMask={false}
      faceMaskColor="black"
      facialHair="stubble"
      graphic="react"
      hair="afro"
      hairColor="white"
      hat="none"
      hatColor="red"
      lashes
      lipColor="purple"
      mask
      mouth="sad"
      skinTone="black"
    />
  );

  const Doji = (
    <BeanHead
      accessory="shades"
      body="chest"
      circleColor="blue"
      clothing="naked"
      clothingColor="red"
      eyebrows="concerned"
      eyes="content"
      faceMask={false}
      faceMaskColor="white"
      facialHair="none"
      graphic="react"
      hair="pixie"
      hairColor="white"
      hat="beanie"
      hatColor="red"
      lashes
      lipColor="turqoise"
      mask
      mouth="lips"
      skinTone="brown"
    />
  );

  const Reni = (
    <BeanHead
      accessory="shades"
      body="breasts"
      circleColor="blue"
      clothing="tankTop"
      clothingColor="blue"
      eyebrows="concerned"
      eyes="squint"
      faceMask={false}
      faceMaskColor="blue"
      facialHair="mediumBeard"
      graphic="redwood"
      hair="afro"
      hairColor="pink"
      hat="none"
      hatColor="red"
      lashes={false}
      lipColor="purple"
      mask
      mouth="openSmile"
      skinTone="dark"
    />
  );

  let options = [];
  if (width > 1000) {
    options = [Ilias, Doji, Reni];
  } else if (width < 700) {
    options = [Ilias, Doji, Reni];
  } else {
    options = [Ilias, Doji, Reni];
  }

  const randomIndex = Math.floor(Math.random() * options.length);
  const avatar = options[randomIndex];

  return (
    <>
      <div className="avatar">
        {avatar}
      </div>
      height: {height}, width: {width}
    </>
  );
}

export default App;