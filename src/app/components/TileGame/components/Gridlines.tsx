import React from 'react';
import { Graphics } from '@pixi/react';

interface GridLinesProps {
  hoveredTile: any;
  tileSize: number;
  gridSize: number;
};

const GridLines: React.FC<GridLinesProps> = ({ hoveredTile, tileSize, gridSize }) => {
    if (!hoveredTile) return null;
  
    const { x, y } = hoveredTile;
    const halfTileSize = tileSize / 2;
  
    return (
      <Graphics
        draw={(g) => {
          g.lineStyle(1, 0xFFFFFF, 100); // Thin white line
          // Draw horizontal line
          g.moveTo((x - y) * halfTileSize, (x + y) * halfTileSize / 2 + halfTileSize * 0.75);
          g.lineTo((x - y + gridSize) * halfTileSize, (x + y) * halfTileSize / 2 + halfTileSize * 0.75);
          // Draw vertical line
          g.moveTo((x - y) * halfTileSize + halfTileSize, (x + y) * halfTileSize / 2 - halfTileSize * 0.25);
          g.lineTo((x - y) * halfTileSize + halfTileSize, (x + y + gridSize) * halfTileSize / 2 - halfTileSize * 0.25);
        }}
      />
    );
  };

  export default GridLines;