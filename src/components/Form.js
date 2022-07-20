import React from "react"

export default function Form() {
    const [form, setForm] = React.useState({
        firstName: "", 
        lastName: "",
        email: "",
        textarea: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })
   
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setForm( (prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        console.log(form)
    }

    return(
        <form onSubmit={handleSubmit}>

            <br/>
            <input 
                type="text" 
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={form.firstName}
            />
            <br/>
            <br/>
            <input 
                type="text" 
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={form.lastName}
            />
            <br/>
            <br/>
            <input 
                type="text" 
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={form.email}
            />
            <br/>
            <br/>
            <textarea
                rows="2"
                onChange={handleChange}
                name="textarea"
                value={form.textarea}
                placeholder="Comments"/>
            <br/>
            <input 
                type="checkbox" 
                id="isFriendly"
                checked={form.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br/>
            <br/>

            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    onChange={handleChange}
                    />
                <label htmlFor="unemployed">Unemployed</label>
                <br/>
                <input 
                    type="radio"
                    id="Part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                    />
                <label htmlFor="Part-time">Part-time</label>
                <br/>
                <input 
                    type="radio"
                    id="Full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}
                    />
                <label htmlFor="Full-time">Full-time</label>
            </fieldset>
            <br/>
            <select id="favColor"
                value={form.favColor}
                onChange={handleChange}
                name="favColor">
                <option value="">-- Choose Color--</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
            </select>
            <br/>
            <br/>
            <button>Submit</button>
        </form>
        
    )
}