import React, {Component} from 'react';
import './App.css';
import Radium, {StyleRoot} from "radium";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Auxiliary from "../hoc/Auxiliary";
import withClass from "../hoc/WithClass";

class App extends Component {

    state = {
        persons: [
            {id:'sd', name: 'Max', age: 28},
            {id:'rwerw', name: 'Manu', age: 29},
            {id:'vffv', name: 'Stephanie', age: "26"}
        ],
        showPersons: false,
    }

    nameChangeHandler = (event, personId) => {

        const personIndex = this.state.persons.findIndex(person => person.id === personId);
        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;


        this.setState({
            persons: persons
        });


    }

    togglePersonHandler = () => {
        this.setState({showPersons: !this.state.showPersons});
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    render() {

        let persons = null;
        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangeHandler}
            />
        }
        return (
            <Auxiliary>
                <Cockpit
                    clicked={this.togglePersonHandler}
                    persons={this.state.persons}
                    showPersons={this.state.showPersons}
                    title={this.props.appTitle}
                />
                <StyleRoot>
                {persons}
                </StyleRoot>
            </Auxiliary>
        );
    }
}

export default withClass(App, "App");
