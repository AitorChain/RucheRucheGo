import { FC } from 'react';

interface IBackgroundColorEffect {
  color: string,
  height: string,
}

const BackgroundColorEffect: FC<IBackgroundColorEffect> = ({color, height}) => {
  return (
    <div className={`bg-purple w-full z-[-1] h-64 absolute left-0 top-0 ${color} ${height}`}/>
  );
};

export default BackgroundColorEffect;