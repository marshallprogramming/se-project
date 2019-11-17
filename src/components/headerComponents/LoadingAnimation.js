import React from 'react';
import ReactLoading from 'react-loading';
 
const LoadingAnimation = ({ type, color }) => (
    <ReactLoading type='spin' color='#000' height={100} width={100} />
);
 
export default LoadingAnimation;