import quotes from './quotes'

const users = {
    1: {
        id: '1',
        username: 'John',
    },
    2: {
        id: '2',
        username: 'Mike',
    },
}

const messages = {
    1: {
        id: '1',
        text: 'Hello',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'Bye',
        userId: '2',
    },
}

export default { users, messages, quotes }