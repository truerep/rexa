import React from 'react'
import Admin from './Admin'

const AdminContainer = () => {
    const [value, setValue] = React.useState("");

    return (
        <Admin value={value} setValue={setValue} />
    )
}

export default AdminContainer