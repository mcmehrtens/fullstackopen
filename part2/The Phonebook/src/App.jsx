import {useEffect, useState} from 'react'
import personService from './services/persons'

const notificationType = {
    confirm: 'confirm',
    error: 'error',
}

const Notification = ({message, type}) => {
    if (message === null) {
        return null
    }

    let notificationStyle;

    switch(type) {
        case notificationType.confirm:
            notificationStyle = {
                textAlign: 'center',
                backgroundColor: 'rgba(61,167,95,0.65)',
                color: 'white',
                marginBottom: 25,
                borderRadius: 10,
                padding: 10,
            }
            break
        case notificationType.error:
            notificationStyle = {
                textAlign: 'center',
                backgroundColor: 'rgba(167,11,40,0.75)',
                color: 'white',
                marginBottom: 25,
                borderRadius: 10,
                padding: 10,
            }
            break
        default:
            notificationStyle = null
    }

    return (
        <div style={notificationStyle}>
            {message}
        </div>
    )
}

const Input = ({value, handler}) =>
    <input value={value} onChange={(event) => handler(event.target.value)} />

const Filter = ({filter, setFilter}) => (
    <div>
        filter shown with <Input value={filter} handler={setFilter} />
    </div>
)

const PersonForm = ({addPersonHandler, newName, setNewName, newNumber, setNewNumber}) => (
    <form onSubmit={addPersonHandler}>
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
)

const Persons = ({persons, deleteHandler}) => (
    <div>
        {persons.map(person => (
            <div key={person.id}>
                {person.name} {person.number}&nbsp;
                <button onClick={
                    deleteHandler(person.id)}>delete
                </button>
            </div>
        ))}
    </div>
)

const App = () => {
    const [persons, setPersons] = useState([])
    const [filter, setFilter] = useState('')
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [notification, setNotification] = useState({
        message: null,
        type: notificationType.confirm,
    })

    const notifyUser = (message, type) => {
        setNotification({
            message: message,
            type: type,
        })
        setTimeout(() => {
            setNotification({
                ...notification,
                message: null,
            })
        }, 5000)
    }

    useEffect(() => {
        personService.getAll().then(initialPersons =>
            setPersons(initialPersons))
    }, [])

    const updatePerson = (id, updatedPerson) => {
        personService
            .update(id, updatedPerson)
            .then(returnedPerson => {
                setPersons(persons.map(person =>
                    person.id !== returnedPerson.id ? person : returnedPerson
                ))
                notifyUser(
                    `Updated phone number for '${returnedPerson.name}'`,
                    notificationType.confirm)
            })
    }

    const addPerson = event => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
        }
        if (persons.map(person => person.name).includes(newName)) {
            const id = persons.find(person => person.name === newName).id
            if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                updatePerson(id, personObject)
            } else return
        } else {
            personService.add(personObject).then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                notifyUser(
                    `'${returnedPerson.name}' was added`,
                    notificationType.confirm
                )
            })
        }
        setNewName('')
        setNewNumber('')
        setFilter('')
    }

    const deletePerson = id => () => {
        personService.remove(id).then(() =>
            setPersons(persons.filter(person => person.id !== id)))
    }

    const filteredPersons = filter === ''
        ? persons
        : persons.filter(person =>
            person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <>
            <h2>Phonebook</h2>
            <Notification message={notification.message} type={notification.type} />
            <Filter filter={filter} setFilter={setFilter} />
            <h3>add a new</h3>
            <PersonForm addPersonHandler={addPerson} newName={newName}
                        setNewName={setNewName} newNumber={newNumber}
                        setNewNumber={setNewNumber} />
            <h3>Numbers</h3>
            <Persons persons={filteredPersons} deleteHandler={deletePerson} />
        </>
    )
}

export default App
