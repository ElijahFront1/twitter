import React from 'react';
import { Button, makeStyles, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative',
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '350%',
        height: '350%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 600,
            fontSize: 20,
        }
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    loginSide: {
        display: 'flex',
        flex: '0 0 50%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitile: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 10,
    }
}))

function SignIn() {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon className={classes.blueSideBigIcon} color="primary" />
                <ul className={classes.blueSideListInfo}>
                    <li><Typography variant="h6"><SearchIcon className={classes.blueSideListInfoIcon} />Читайте о том, что вам интересно.</Typography></li>
                    <li><Typography variant="h6"><PeopleOutlineIcon className={classes.blueSideListInfoIcon} />Узнайте, что о чем говорят в мире.</Typography></li>
                    <li><Typography variant="h6"><ChatBubbleOutlineIcon className={classes.blueSideListInfoIcon} />Присоединяйтесь к общению.</Typography></li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon className={classes.loginSideTwitterIcon} color="primary" />
                    <Typography className={classes.loginSideTitile} variant="h4">Узнайте, что о чем говорят в мире.</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <br />
                    <Button style={{ marginBottom: 20 }} variant="contained" color="primary" fullWidth>Зарегестрироваться</Button>
                    <Button variant="outlined" color="primary" fullWidth>Воийти</Button>
                </div>
            </section>
        </div>
    )
}



export default SignIn

