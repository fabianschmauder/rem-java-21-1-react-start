import StudentCard from "./StudentCard";


function StudentList({students, onDeleteStudent}) {
    return <ul>
        {students.map(student => <li key={student.id}>
            <StudentCard title={"Name: " + student.name}
                         description={"Uni: " + student.uni}
                         onDelete={() => onDeleteStudent(student)}/>
        </li>)}
    </ul>
}

export default StudentList;
