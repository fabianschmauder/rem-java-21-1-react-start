import './App.css';
import StudentCard from "./components/StudentCard";
import {useState} from "react";
import AddStudentForm from "./components/AddStudentForm";

function App() {
    const [students, setStudents] = useState([]);

    return (
        <div>
            {students.map(student => <StudentCard key={student.id}
                                                  title={"Name: " + student.name}
                                                  description={"Uni: " + student.uni}
                                                  onDelete={() => {
                                                      const updatedList = students.filter(item => item.id !== student.id);
                                                      setStudents(updatedList)
                                                  }}
            />)}

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

            <AddStudentForm onAdd={newStudent =>
                setStudents([...students, newStudent])}/>

        </div>
    );
}

export default App;


