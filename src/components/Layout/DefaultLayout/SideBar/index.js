import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <aside className={cx('wapper')}>
            <h2>SideBar</h2>
        </aside>
    );
}

export default SideBar;
