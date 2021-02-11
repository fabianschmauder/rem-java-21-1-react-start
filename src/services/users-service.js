import axios from "axios";


export function loadStudentsApi(){
    return axios.get("https://jsonplaceholder.typicode.com/users")
}
