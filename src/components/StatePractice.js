import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstname : "John",
        lastname : "Doe",
        phone : "09212512",
        email : "John",
        isFavorite : false,
    })

    let favorite = contact.isFavorite ? "Favorite" : "Not favorite"

    function OnClickText (){

        setContact( (prevContact => {
            return {
                ...prevContact,
                isFavorite : !prevContact.isFavorite
            }
        }))
    }


    return (
        <main>
            <h2 onClick={OnClickText}>{contact.firstname}</h2>
            {favorite}
        </main>
    )
}