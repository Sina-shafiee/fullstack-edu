import {
  type HtmlHTMLAttributes,
  type ReactNode,
  useRef,
  useState,
  MouseEventHandler,
} from 'react';

import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '@/utils';

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  _title: ReactNode;
  _content: ReactNode;
  contentClassName?: string;
};

export const Accordion = ({
  _title,
  _content,
  className,
  contentClassName,
  ...props
}: Props) => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');
  const contentElement = useRef<HTMLDivElement>(null);

  const HandleOpening: MouseEventHandler<HTMLDivElement> = (e) => {
    if (contentElement.current?.contains(e.target as Node)) {
      return null;
    }
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement?.current?.scrollHeight}px` : '0px');
  };
  return (
    <div
      onClick={HandleOpening}
      {...props}
      className={cn('w-full bg-muted/80 cursor-pointer', className)}
    >
      <div className={'p-2 flex justify-between'}>
        {_title}
        {isOpened ? (
          <ArrowUp strokeWidth={2} className="h-4 w-4" />
        ) : (
          <ArrowDown className="w-4 h-4" strokeWidth={2} />
        )}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className={cn(
          'overflow-y-hidden w-full rounded-md border-t whitespace-wrap transition-all duration-300 border-transparent',
          isOpened && 'bg-background/40'
        )}
      >
        <div className={cn('px-4', contentClassName)}>{_content}</div>
      </div>
    </div>
  );
};
