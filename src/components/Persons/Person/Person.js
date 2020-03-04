import React, {Fragment} from 'react';
import './Person.css'
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/WithClass";
import PropTypes from 'prop-types';

const person = (props) => {

    const style = {
        '@media (min-width:500px)' : {
            width: '450px',
        }
    }

    return (
        <Auxiliary >
            <p onClick={props.click}>
                I'm {props.name} and {props.age} years old
            </p>
            <p>{props.children}</p>
            <input
                type="text"
                onChange={props.change}
                value={props.name}
            />
        </Auxiliary>


    );

}

person.prototype = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func,
}

export default withClass(person, "Person");
