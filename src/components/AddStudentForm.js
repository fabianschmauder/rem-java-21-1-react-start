import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

function AddStudentForm({onAdd}) {

    const [name, setName] = useState("some name");
    const [uni, setUni] = useState("");


    return <form onSubmit={event => {
        event.preventDefault()
        onAdd({id: uuidv4(), name: name, uni: uni})
        setName("")
        setUni("")
    }}>

        <label>
            Name
            <input value={name} onChange={event => setName(event.target.value)}/>
        </label>
        <label>
            Uni
            <input value={uni} onChange={event => setUni(event.target.value)}/>
        </label>


         <button>
            Add Student
        </button>
    </form>
}

export default AddStudentForm;
