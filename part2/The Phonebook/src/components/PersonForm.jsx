import Input from "./Input.jsx";

const PersonForm = ({addPerson, newName, setNewName, newNumber,
                        setNewNumber}) => (
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
)

export default PersonForm
