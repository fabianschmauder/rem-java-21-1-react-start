import './App.css';
import {useEffect, useState} from "react";
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";
import {loadStudentsApi} from "./services/users-service";


function App() {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadStudents();
    },[]);

    function loadStudents(){
        setLoading(true);
        loadStudentsApi()
            .then(result => setStudents(result.data))
            .then(() => setLoading(false))
    }

    return (
        <div>
          <StudentList students={students} onDeleteStudent={(student) => {
              const updatedList = students.filter(item => item.id !== student.id);
              setStudents(updatedList)
          }}/>
            {loading && <div>Loading students</div>}
            <button onClick={loadStudents}>
                Load Students
            </button>

            <AddStudentForm onAdd={newStudent =>
                setStudents([...students, newStudent])}/>

        </div>
    );
}

export default App;


