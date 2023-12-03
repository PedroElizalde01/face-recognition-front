import React from 'react';
import styled, { keyframes, useTheme } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
	border: 4px solid transparent;
	border-top: 4px solid white;
	border-radius: 50%;
	width: 16px;
	height: 16px;
	animation: ${spin} 2s linear infinite;
	background: transparent;
	background-clip: content-box;
	box-shadow: 0 0 0 1px transparent;
`;

const CircularLoader = () => {
	
	return <LoaderContainer color={"white"} />;
};

export default CircularLoader;