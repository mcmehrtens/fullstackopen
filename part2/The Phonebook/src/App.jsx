import {useState} from 'react'

const Input = ({value, handler}) =>
    <input value={value} onChange={(event) => handler(event.target.value)} />

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
        }
        if (persons.map(person => person.name).includes(newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
        }
    }

    const filteredPersons = filter === ''
        ? persons
        : persons.filter(person =>
            person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <>
            <h2>Phonebook</h2>
            <div>
                filter shown with <Input value={filter} handler={setFilter} />
            </div>
            <h2>add a new</h2>
            <form onSubmit={addPerson}>
                <div>
                    name: <Input value={newName} handler={setNewName} />
                </div>
                <div>
                    number: <Input value={newNumber} handler={setNewNumber} />
                </div>
                <div>
                    <button type={"submit"}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {filteredPersons.map(person => (
                    <p key={person.name}>
                        {person.name} {person.number}
                    </p>
                ))}
            </div>
        </>
    )
}

export default App