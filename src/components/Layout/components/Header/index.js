import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: [
            {
                icon: '',
                title: 'Viet Nam',
            },
            {
                icon: '',
                title: 'English',
            },
        ],
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
        to: '/keyboard',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    visible={searchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>Accounts</h3>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Tìm kiếm tài khoản và videos" spellCheck="false" />
                        {/* <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button> */}
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <Tippy content="Tìm kiếm">
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
