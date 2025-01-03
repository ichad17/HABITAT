import React, { useState } from 'react';
import '@pixi/events';
import { Graphics, Container } from '@pixi/react';

interface TileProps {
  x: number;
  y: number;
  tileSize: number;
  onHover: any;
};

const Tile: React.FC<TileProps> = ({ x, y, tileSize, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);
  const halfTileSize = tileSize / 2;

  const handleMouseOver = () => {
    setIsHovered(true);
    onHover(x, y); // Pass coordinates for reference if needed
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    onHover(null);;
  };

  return (
      <Container
        x={(x - y) * halfTileSize}
        y={(x + y) * halfTileSize / 2}

      >
        <Graphics
          interactive
          mouseover={handleMouseOver}
          mouseout={handleMouseOut}
          draw={(g) => {
            const fillColor = isHovered ? 0xcccccc : 0x808080; // Change color on hover
            if (isHovered) {
              g.lineStyle(9, 0x000000, .5); // Thick black border on hover
            }

            if (!isHovered) {
              g.lineStyle(.5, 0x999999); // Thin black border
            }
            g.beginFill(0x9f8d8d);
            // Adjust points for rhombus shape
            g.moveTo(0, halfTileSize * 0.75);
            g.lineTo(halfTileSize, halfTileSize * 0.25);
            g.lineTo(tileSize, halfTileSize * 0.75);
            g.lineTo(halfTileSize, halfTileSize * 1.25);
            g.endFill();
          }}
        />
      </Container>
  );
};
  

export default Tile;