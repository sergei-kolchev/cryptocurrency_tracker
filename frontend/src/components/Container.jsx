import React from 'react';

import classes from "../App.module.css";

const Container = (props) => {
    return (
        <div className={classes.container}>
            <div className={`${classes.item} ${classes.header}`}>
                <span className={classes.slogan}>Top 100 crypto currencies</span>
            </div>
            <div className={[classes.item, classes.second_header].join(' ')}>
                <img className={classes.logo} src="images/logo.png" alt=""/>
            </div>
            <div className={[classes.item, classes.content].join(' ')}>
                {props.children}
            </div>
        </div>
    );
};

export default Container;
