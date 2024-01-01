import {useState} from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas', number: '040-123456', id: 1},
        {name: 'Ada Lovelace', number: '39-44-5323523', id: 2},
        {name: 'Dan Abramov', number: '12-43-234345', id: 3},
        {name: 'Mary Poppendieck', number: '39-23-6423122', id: 4}
    ])
    const [filter, setFilter] = useState('')
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }
        if (persons.map(person => person.name).includes(newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
            setFilter('')
        }
    }

    const filteredPersons = filter === ''
        ? persons
        : persons.filter(person =>
            person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <>
            <h2>Phonebook</h2>
            <Filter filter={filter} setFilter={setFilter} />
            <h3>add a new</h3>
            <PersonForm addPerson={addPerson} newName={newName}
                        setNewName={setNewName} newNumber={newNumber}
                        setNewNumber={setNewNumber} />
            <h3>Numbers</h3>
            <Persons persons={filteredPersons} />
        </>
    )
}

export default App
