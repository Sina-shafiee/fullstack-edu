import { type RefObject, useEffect } from 'react';

type Props<T> = {
  ref: RefObject<T>;
  callback: (e?: MouseEvent) => void;
};

export const useClickOutside = <T extends HTMLElement>({ ref, callback }: Props<T>) => {
  const handleClick = (e: MouseEvent) => {
    if (ref?.current && !ref?.current?.contains(e.target as Node)) {
      callback(e);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return null;
};
