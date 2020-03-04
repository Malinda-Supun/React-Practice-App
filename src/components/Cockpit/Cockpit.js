import React, {Fragment, useEffect, useRef} from 'react';

const cockpit = (props) => {

    const toggleButtonRef = useRef(null);

    useEffect(() => {
       /* console.log('[Cockpit.js] useEffect');

        setTimeout(() => {
            alert('save data to cloud!');
        }, 1000);*/
       toggleButtonRef.current.click();

    },[]);

    const styles = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: "pointer",
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black',
        }
    }

    if (props.showPersons) {
        styles.backgroundColor = 'red';
        styles[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }
    }

    const classes = [];
    if (props.persons.length <= 2) {
        classes.push('red');
    }
    if (props.persons.length <= 1) {
        classes.push('bold');
    }

    return (
        <Fragment>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working</p>
            <button ref={toggleButtonRef} style={styles} onClick={props.clicked}>Switch Name</button>
        </Fragment>
    );
}

export default cockpit;
