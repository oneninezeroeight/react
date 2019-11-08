import { createStore } from 'redux';
interface stateType {
    name: string,
    age: number | string | boolean,
    skill: [string, string, number],
    searchText: string
}
interface actionType {
    type: string,
    searchText: string
}

const store: Object = createStore((state: stateType = {
    name: 'yao',
    age: 0,
    skill: ['ps', 'js', 1],
    searchText: ''
}, action: actionType) => {
    switch (action.type) {
        case "SETNAME":
            return {
                ...state,
                name: "jing"
            }
        case "SETSEARCHTEXT":
            return {
                ...state,
                searchText: action.searchText
            }
        default:
            return state
    }
})

export default store