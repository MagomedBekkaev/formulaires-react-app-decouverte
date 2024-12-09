import { useRef } from "react";


const UncontrolledForm = () => {
    
    const usernameRef  = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Username :", usernameRef.current.value);
    }
    
    return (
        <div>
            <h2>Formulaire non controlé</h2>

            <form onSubmit={submitHandler}>
                <div>
                    <label>Nom d'utilisateur</label>
                    <input type="text" ref={usernameRef} />
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default UncontrolledForm;