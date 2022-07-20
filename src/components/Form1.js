import React from "react"

export default function Form1 (){

    const [form, setForm] = React.useState({
        email: "",
        password: "",
        confirmPass: "",
        checkBox: true
    })

    function handleChange(event) {
        setForm( prevForm => {
            const {name, value, type, checked} = event.target
            return {
                ...prevForm,
                [name] : type === "checkbox" ? checked : value 
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    
        form.password === form.confirmPass ? 
        console.log("Successfully signed up") :
        console.log("passwords do not match")

        const check = (form.checkBox && 
            "Thank for signing up for our new letter")
        
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <br/>
                <input
                    type="text"
                    name="email"
                    value={form.email}
                    placeholder="email"
                    onChange={handleChange}
                />
                <br/>
                <br/>
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    placeholder="password"
                    onChange={handleChange}
                />
                <br/>
                <br/>
                <input
                    type="password"
                    name="confirmPass"
                    value={form.confirmPass}
                    placeholder="confirm-password"
                    onChange={handleChange}
                />
                <br/>
                <br/>
                <input
                    id="newsletter"
                    type="checkbox"
                    checked={form.checkBox}
                    name="checkBox"
                    onChange={handleChange}
                />
                <label htmlFor="newsletter">I want to join the newsletter</label>
                <br/>
                <br/>
                <button>Sign up</button>
            </form>
        </div>
    )
}