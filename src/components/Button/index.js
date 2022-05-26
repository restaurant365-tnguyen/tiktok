import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    className,
    primary,
    outline,
    rounded,
    text,
    disabled,
    small,
    large,
    onClick,
    leftIcon,
    rightIcon,
    ...passProps
}) {
    let Comp = 'button';
    let classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        rounded,
        small,
        large,
        text,
        disabled,
        leftIcon,
        rightIcon,
    });
    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
