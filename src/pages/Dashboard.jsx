import React from 'react';
import SkeletonGrid from '../components/appLayout/SkeletonGrid';

const Dashboard = () => {
  return <SkeletonGrid rows={5} columns={5} cellWidth={170} cellHeight={100} />;
};

export default Dashboard;
