import { useReducer, useRef } from 'react';
import { Stage, useTick, Container, Sprite } from '@inlet/react-pixi';
import dino from '../../img/tile000.png';

const Canvas = () => {
  const reducer = (_, { data }) => data;
  let rotation = 0;
  let speed;
  const Bunny = () => {
    const [motion, update] = useReducer(reducer);
    const iter = useRef(0);
    useTick((delta) => {
      const i = (iter.current += 0.05 * delta);
      update({
        type: 'update',
        data: {
          // x: Math.sin(i) * 50,
          x: 150,
          y: 50,
        },
      });
    });
    return <Sprite image={dino} {...motion} />;
  };
  return (
    <Stage width={800} height={400} options={{ backgroundAlpha: 0xeef1f5 }}>
      <Container x={250} y={250}>
        <Bunny
          x={60}
          y={60}
          scale={[2 + Math.abs(2 * rotation), 2 + Math.abs(2 * rotation)]}
        />
      </Container>
    </Stage>
  );
};

export default Canvas;
