import './App.css';
import StudentCard from "./components/StudentCard";
import {useState} from "react";

function App() {
    const [students, setStudents] = useState([]);

    return (
        <div>
            {students.map(student => <StudentCard key={student.id}
                                                  title={"Name: " + student.name}
                                                  description={"Uni: " + student.uni}/>)}

            <button onClick={() =>
                setStudents([
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
                    ]
                )}>
                Load Students
            </button>
        </div>
    );
}

export default App;
