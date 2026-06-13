import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react';
import { type VariantProps, cva } from 'class-variance-authority';

const buttonstyle = cva(
  'rounded-xl text-base font-medium border border-silver',
  {
    defaultVariants: {
      size: 'sm',
      variant: 'primary',
    },
    variants: {
      size: {
        md: 'px-8 py-3',
        sm: 'py-2 px-4 text-sm',
      },
      variant: {
        primary:
          'bg-transparent leading-5 text-silver duration-300 ease-in hover:scale-90 hover:bg-silver hover:text-black',
        secondary: 'text-silver bg-black duration-300 ease-in hover:scale-90',
      },
    },
  }
);

type Props = VariantProps<typeof buttonstyle> &
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({
  size,
  variant,
  className,
  children,
  ...rest
}: Props) => {
  const style = buttonstyle({ className, size, variant });

  return (
    <button className={style} {...rest}>
      {children}
    </button>
  );
};
