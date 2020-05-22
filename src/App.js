import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Navbar } from './components';
import { Main } from './pages/Main';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh'
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
