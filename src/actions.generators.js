const generateActionWithBody = type => body => ({
    type,
    body,
})

const generateActionWithId = type => id => ({
    type,
    id,
})

const generateEmptyAction = type => () => ({
    type,
})

const generateActionWithBodyAndId = type => (id, body) => ({
    type,
    id,
    body,
})

export {
    generateActionWithBody,
    generateActionWithId,
    generateEmptyAction,
    generateActionWithBodyAndId,
}