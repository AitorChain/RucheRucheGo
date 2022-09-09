import { FC } from 'react';

interface IBackgroundColorEffect {
  color?: string,
  height?: string,
}

const BackgroundColorEffect: FC<IBackgroundColorEffect> = ({color = 'bg-purple', height = 'h-64'}) => {
  return (
    <div className={`w-full z-[-1] absolute left-0 top-0 ${color} ${height}`}/>
  );
};

export default BackgroundColorEffect;