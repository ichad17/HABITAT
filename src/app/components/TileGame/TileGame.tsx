'use client'

import { Stage, Container, Graphics, Text } from '@pixi/react';
import { useState, useMemo } from 'react';
import Tile from './components/Tile';
import GridLines from './components/Gridlines';

import React, { useEffect, useRef } from 'react';

const TileGame: React.FC = () => {

  const tileSize = 48;
  const gridSize = 16;
  const stageSize: {width :number, height: number} = {width: 1200, height: 800};
  const gridOffset = { x: stageSize.width / 2, y: stageSize.height / 2 - 200 }; // Adjust offset as needed
  const [hoveredTile, setHoveredTile] = useState(null);


  const tileData = Array.from({ length: gridSize * gridSize }, (_, index) => ({
    x: index % gridSize,
    y: Math.floor(index / gridSize),
  }));

  return (
    <Stage width={stageSize.width} height={stageSize.height}>
        <Graphics // Background
          draw={(g) => {
            g.beginFill(0xffddba);
            g.drawRect(0, 0, stageSize.width, stageSize.height);
            g.endFill();
          }}
        />
      <Container x={gridOffset.x} y={gridOffset.y}>
        {tileData.map((tile) => (
          <Tile key={`${tile.x}-${tile.y}`} x={tile.x} y={tile.y} tileSize={tileSize} onHover={setHoveredTile} />
        ))}
        {// <GridLines key={hoveredTile ? 'grid-lines' : null} hoveredTile={hoveredTile} tileSize={tileSize} gridSize={gridSize} /> 
        }
    
      </Container>
    </Stage>
  );
};


export default TileGame;