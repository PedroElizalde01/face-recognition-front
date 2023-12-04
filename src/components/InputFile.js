import React from 'react';
import { FileInputWrapper, FileInput, PreviewImage, ImageContainer } from './common';
import ImageIcon from '../assets/ImageIcon';

const InputFile = ({ image, background, height, width, onChange }) => (
  <FileInputWrapper style={{ backgroundColor: background, height, width }}>
    {image ? 
    <ImageContainer>
        <PreviewImage src={image} /> 
    </ImageContainer>
    : <ImageIcon /> }
    <FileInput type="file" accept="image/*" onChange={onChange} />
  </FileInputWrapper>
);

export default InputFile;
