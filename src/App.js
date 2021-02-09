import './App.css';
import StudentCard from "./components/StudentCard";

function App() {
    const students =[
        {
            id: "1",
            name: "Frank",
            uni: "cologne"
        },
        {
            id: "2",
            name: "Jochen",
            uni: "Hamburg"
        },
        {
            id: "3",
            name: "Jochen 3",
            uni: "Hamburg"
        }
    ];

    return (
        <div>
            {students.map(student => <StudentCard key={student.id}
                                                  title={"Name: "+student.name}
                                                  description={"Uni: "+ student.uni}/>)}
        </div>
    );
}

export default App;
