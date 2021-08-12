import React from 'react'

export default function Form(props) {

    const { formValues, update, submit } = props;

    const onChange = evt => {
        console.log('onchange firing')
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label>Name
                    <input type="text" name="name" value={formValues.name} onChange={onChange} />
                </label>

                <label>Email
                    <input type="email" name="email" value={formValues.email} onChange={onChange} />
                </label>

                <label>Role
                    <select name="role" value={formValues.role} onChange={onChange}>
                        <option>--Please choose an option--</option>
                        <option>FE developer</option>
                        <option>BE developer</option>
                        <option>Full stack developer</option>
                    </select>
                </label>

                <div className="submit">
                    <button>submit</button>
                </div>
            </div>
        </form>
    )
}