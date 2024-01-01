import {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([{name: 'Arto Hellas'}])
    const [newName, setNewName] = useState('')

    const addName = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
        }
        if (persons.map(person => person.name).includes(newName)) {
            alert(`${newName} is already added to phonebook`)
        } else {
            setPersons(persons.concat(personObject))
            setNewName('')
        }
    }

    const handleNewNameChange = (event) => setNewName(event.target.value)

    return (
        <>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input
                    value={newName}
                    onChange={handleNewNameChange}
                />
                </div>
                <div>
                    <button type={"submit"}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.map(person => <p key={person.name}>{person.name}</p>)}
            </div>
        </>
    )
}

export default App