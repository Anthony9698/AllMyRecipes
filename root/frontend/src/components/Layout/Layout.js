import classes from './layout.module.css';
import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './Toolbar/SideDrawer/SideDrawer';
import { SideDrawerProvider } from '../../context/SideDrawerContext';

const Layout = props => {
    return (
        <SideDrawerProvider>
            <div className={classes.Layout}>
                <Toolbar />
                <SideDrawer />
                <main>
                    {props.children}
                </main>
            </div>
        </SideDrawerProvider>
    );
}
export default Layout;