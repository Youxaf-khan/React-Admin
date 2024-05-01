import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import '../../styles/appLayout/SkeletonGrid.scss';

const SkeletonGrid = ({ rows, columns, cellWidth, cellHeight }) => {
  const renderSkeletonCells = () => {
    return [...Array(rows)].map((_, row) => (
      <Grid key={row} container spacing={2} className="row-gap" justifyContent="center">
        {[...Array(columns)].map((_, col) => (
          <Grid key={col} item className="col-gap">
            <Skeleton variant="rectangular" width={cellWidth} height={cellHeight} />
          </Grid>
        ))}
      </Grid>
    ));
  };

  return <div className="tiles-container">{renderSkeletonCells()}</div>;
};

export default SkeletonGrid;
