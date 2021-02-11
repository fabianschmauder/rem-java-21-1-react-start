import './App.css';
import {useState} from "react";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";

function App() {
    const [students, setStudents] = useState([]);

    return (
        <div>
          <StudentList students={students} onDeleteStudent={(student) => {
              const updatedList = students.filter(item => item.id !== student.id);
              setStudents(updatedList)
          }}/>

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


