import React from 'react';
import Button from './Button';
import { IconType } from 'react-icons';
import Container from '@/components/Container';

interface ISectionProps{
  headerText?: string,
  paragraphText?: string,
  label: string,
  className?: string,
  icon?: IconType
}


const SectionHeader = ({
  headerText,
  paragraphText,
  label,
  className,
  icon
  
  
}:ISectionProps) => {
  return (
    <Container className='my-8'>
       <div className=''>
      <h1 className='text-3xl font-semibold'>{ headerText}</h1>
      <div className='lg:flex items-center justify-between'>
        <p className='text-foreground'>{paragraphText }</p>
        <Button
          label={label && label}
          className={className && className}
          icon={icon && icon}
        />
      </div>
      </div>
   </Container>
  );
};

export default SectionHeader;