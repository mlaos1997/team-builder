import { v4 as uuid } from 'uuid'

const initialDevelopers = [
    {
        id: uuid(),
        name: 'Mike',
        email: 'mike@mike.com',
        role: 'FE developer'
    },
]

// 👉 simulating axios for [GET] and [POST]
export default {
    get() {
        return Promise.resolve({ status: 200, success: true, data: initialDevelopers })
    },
    post(url, { name, email, role }) {
        const newDeveloper = { id: uuid(), name, email, role }
        return Promise.resolve({ status: 200, success: true, data: newDeveloper })
    }
}
