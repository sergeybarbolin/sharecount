import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Navbar } from './components/Navbar';
import { Main } from './pages/Main';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        height: '100vh'
    }
}));

function App() {
    const styles = useStyles();
    return (
        <div className={styles.root}>
            <Navbar/>
            <Main />
        </div>
    );
}

export default App;
