'use strict';

const defaultState = {
    items:[]
}


const Reducer = (state = defaultState , action={}) => {
    switch (action.type) {
        case 'CIMG':
            return ;
        default:
            return state;
    }
};

export default Reducer;