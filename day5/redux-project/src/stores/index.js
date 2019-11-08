import {
    createStore
} from 'redux'
export default createStore((state = {
    name: 'yong',
    skill: ['ps','js','css']
}, action) => {
    switch (action.type) {
        case 'SETNAME':
            return {
                ...state,
                name: action.name
            }
            default:
                return state
    }
})