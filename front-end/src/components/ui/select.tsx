import { cn } from '@/utils';
import ReactSelect, { Props as SelectProps } from 'react-select';

type Props = SelectProps & {
  _options: { label: string; value: string }[];
};

export const Select = ({ _options, className, onChange, value, ...props }: Props) => {
  return (
    <ReactSelect
      menuPlacement="auto"
      menuPosition="absolute"
      onChange={onChange}
      options={_options}
      value={value}
      className={cn('my-react-select-container', className)}
      classNamePrefix="my-react-select"
      placeholder=""
      {...props}
    />
  );
};
