import { FC } from 'react';

interface IBackgroundColorEffect {
  color: string,
  height: string,
}

const BackgroundColorEffect: FC<IBackgroundColorEffect> = (props) => {
  return (
    <div className={`bg-purple w-screen h-56 fixed left-0 top-0 ${props}`}/>
  );
};

export default BackgroundColorEffect;