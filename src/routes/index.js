import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnlyLayout } from '~/components/Layout';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnlyLayout },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
