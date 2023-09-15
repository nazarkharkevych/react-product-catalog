import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import './Button.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'arrow' | 'cart' | 'favourite' | 'color' | 'text' | 'quantity';
  sign?: 'plus' | 'minus';
  arrowDirection?: 'top' | 'left';
  refProp?: React.RefObject<HTMLButtonElement>;
};

export const Button: React.FC<Props> = ({
  className = '',
  variant: content,
  sign,
  arrowDirection,
  refProp,
  ...props
}) => {
  return (
    <button
      ref={refProp}
      type="button"
      className={classNames(
        'Button',
        { [className]: className },
        { [`Button--${content}`]: content },
        { [`Button--quantity-${sign}`]: sign },
        { [`Button--arrow-${arrowDirection}`]: arrowDirection },
      )}
      {...props}
    />
  );
};
