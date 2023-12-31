import {useState} from 'react'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Statistic = ({name, value, suffix}) => {
    if (isNaN(value)) {
        return (<p>{name} N/A</p>)
    }
    return (<p>{name} {value}{suffix}</p>)
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
            <Statistic name={'good'} value={good}/>
            <Statistic name={'neutral'} value={neutral}/>
            <Statistic name={'bad'} value={bad}/>
            <Statistic name={'all'} value={total}/>
            <Statistic name={'average'} value={average}/>
            <Statistic name={'positive'} value={percentPositive} suffix={' %'}/>
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
                        setValue: setGood})}
                    text={'good'}
                />
                <Button
                    handleClick={handleClick({
                        value: neutral,
                        setValue: setNeutral})}
                    text={'neutral'}
                />
                <Button
                    handleClick={handleClick({
                        value: bad,
                        setValue: setBad})}
                    text={'bad'}
                />
            </div>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </>
    )
}

export default App
