const initialValue ={
    isPopup:false
}

const popupReducer=(state=initialValue, action)=>{
    switch(action.type) {
        case 'OPENED_POPUP':
            return {
                ...state,
                isPopup: true
            };
        case 'CLOSED_POPUP':
            return {
                ...state,
                isPopup: false
            };
    }

    return state;
}

export default popupReducer;