import axios from 'axios'

const url = 'http://localhost:3001/persons'

const getAll = () => axios.get(url).then(response => response.data)

const update = (id, updatedPerson) =>
    axios.put(`${url}/${id}`, updatedPerson).then(response => response.data)

const add = person => axios.post(url, person).then(response => response.data)

const remove = id => axios.delete(`${url}/${id}`)

export default {getAll, update, add, remove}