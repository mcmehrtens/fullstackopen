import Person from "./Person.jsx";

const Persons = ({persons}) => (
    <div>
        {persons.map(person => <Person
            key={person.id}
            name={person.name}
            number={person.number}
        />)}
    </div>
)

export default Persons