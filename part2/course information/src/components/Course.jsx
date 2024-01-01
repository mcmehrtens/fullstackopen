import Header from "./Header.jsx";
import Content from "./Content.jsx";

const Course = ({course}) => (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
    </div>
)

export default Course