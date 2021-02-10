import {useState} from "react";

function StudentCard({title, description,onDelete}) {
    const [clicked, setClicked] = useState(0);
    return <article>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{clicked}</p>
        <button onClick={() => {
             setClicked(clicked + 1)
        }}> Click me</button>

        <button onClick={onDelete}> Delete</button>
    </article>
}

export default StudentCard;
