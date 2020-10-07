const count = (state = 0 ,action) => {
    switch (action.type) {
        case 'Add':
            return state + 1 ;
            case 'Del':
            return state - 1 ;
        default:
            return state;
    }
}

export default count;