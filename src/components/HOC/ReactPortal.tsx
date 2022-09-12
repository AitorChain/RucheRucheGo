import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

//Helper function to create a div element on the real DOM.
const createWrapperAndAppend = (wrapperId: string) => {
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

type ReactPortalProps = {
  children: JSX.Element,
  wrapperId: string
}

const ReactPortal = ({children, wrapperId}: ReactPortalProps) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

  // useLayoutEffect to check changements at the real dom
  useLayoutEffect(() => {
    //Assign and checks if the wrapperId is already in the real dom.
    let element = document.getElementById(wrapperId);
    let systemCreated = false;


    //If the wrapperId is not in the real dom, we create and elemend and append it to the node
    //using the createWrapperAppend utility function
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppend(wrapperId) as HTMLElement;
    }

    setWrapperElement(element);

    return () => {
      //Checks if the new element has been succesfully created. 
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement as HTMLElement);
};

export default ReactPortal;