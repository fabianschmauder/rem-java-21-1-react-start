import StudentCard from "./StudentCard";


function StudentList({students, onDeleteStudent}) {
    return <ul>
        {students.map(student => <li key={student.id}>
            <StudentCard title={"Name: " + student.name}
                         description={"Email: " + student.email}
                         onDelete={() => onDeleteStudent(student)}/>
        </li>)}
    </ul>
}

export default StudentList;
