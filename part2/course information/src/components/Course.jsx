import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";

const Course = ({course}) => {
    const total = course.parts
        .map(part => part.exercises)
        .reduce((prev, curr) => prev + curr)
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total sum={total} />
        </div>
    )
}

export default Course