import {useState} from 'react'

const Anecdote = ({anecdote, votes}) => (
    <>
        <p>{anecdote}</p>
        <p>has {votes} votes</p>
    </>
)

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.',
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
    const [mostVotes, setMostVotes] = useState({index: 0, count: 0})

    const chooseAnecdote = () =>
        setSelected(Math.floor(Math.random() * anecdotes.length))
    const vote = () => {
        const votesCopy = [...votes]
        votesCopy[selected]++
        setVotes(votesCopy)
        if (votesCopy[selected] > mostVotes.count) {
            setMostVotes({index: selected, count: votesCopy[selected]})
        }
    }

    return (
        <>
            <h1>Anecdote of the day</h1>
            <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
            <Button handleClick={vote} text={'vote'} />
            <Button handleClick={chooseAnecdote} text={'next anecdote'} />
            <h1>Anecdote with the most votes</h1>
            <Anecdote
                anecdote={anecdotes[mostVotes.index]}
                votes={mostVotes.count}
            />
        </>
    )
}

export default App