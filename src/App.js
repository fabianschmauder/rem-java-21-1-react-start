import './App.css';
import {useState} from "react";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";
import {loadStudentsApi} from "./services/users-service";


function App() {
    const [students, setStudents] = useState([]);


    function loadStudents(){
        loadStudentsApi().then(result => setStudents(result.data))
    }

    return (
        <div>
          <StudentList students={students} onDeleteStudent={(student) => {
              const updatedList = students.filter(item => item.id !== student.id);
              setStudents(updatedList)
          }}/>

            <button onClick={loadStudents}>
                Load Students
            </button>

            <AddStudentForm onAdd={newStudent =>
                setStudents([...students, newStudent])}/>

        </div>
    );
}

export default App;


