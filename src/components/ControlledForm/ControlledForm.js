import {useState} from 'react';

const ControlledForm = () => {
    const [username, setUsername] = useState('')


const inputChangeHandler = (e) => {
    setUsername(e.target.value)
}

const submitHandler = (e) => {
    e.preventDefault();
    console.log("Nom d'utilisateur : ", username);
}

    return (
        <div>
            <h2>Formulaire Controlé</h2>

            <form onSubmit={submitHandler}>
                <div>
                    <label>Nom d'utilisateur :</label>
                    <input type="text" value={username} onChange={inputChangeHandler} />
                    <p>Nom d'utilisatuer saisi : {username}</p>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>    
    )
}



export default ControlledForm;