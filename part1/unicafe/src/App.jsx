import {useState} from 'react'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const StatisticLine = ({text, value, unit}) => {
    if (isNaN(value)) {
        return (
            <tr>
                <td>{text}</td>
                <td>N/A</td>
            </tr>
        )
    }
    return (
        <tr>
            <td>{text}</td>
            <td>{value} {unit}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad
    const average = (good - bad) / total
    const percentPositive = good / total * 100

    if (total === 0)
        return (
            <div>
                <h1>statistics</h1>
                <p>No feedback given</p>
            </div>
        )

    return (
        <div>
            <h1>statistics</h1>
            <table>
                <StatisticLine text={'good'} value={good} />
                <StatisticLine text={'neutral'} value={neutral} />
                <StatisticLine text={'bad'} value={bad} />
                <StatisticLine text={'all'} value={total} />
                <StatisticLine text={'average'} value={average} />
                <StatisticLine
                    text={'positive'}
                    value={percentPositive}
                    unit={'%'}
                />
            </table>
        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleClick = ({value, setValue}) => () => setValue(value + 1)

    return (
        <>
            <div>
                <h1>give feedback</h1>
                <Button
                    handleClick={handleClick({
                        value: good,
                        setValue: setGood
                    })}
                    text={'good'}
                />
                <Button
                    handleClick={handleClick({
                        value: neutral,
                        setValue: setNeutral
                    })}
                    text={'neutral'}
                />
                <Button
                    handleClick={handleClick({
                        value: bad,
                        setValue: setBad
                    })}
                    text={'bad'}
                />
            </div>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    )
}

export default App
