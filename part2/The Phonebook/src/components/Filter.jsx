import Input from "./Input.jsx";

const Filter = ({filter, setFilter}) => (
    <div>
        filter shown with <Input value={filter} handler={setFilter} />
    </div>
)

export default Filter
