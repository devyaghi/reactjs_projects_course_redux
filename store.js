import {createStore} from "redux";

const reducer=(state,action)=>{

    switch (action.type) {
        default : return state;
    }

}

const initialState={

    data:[{id:1,name:"homework"},{id:2,name:"solving bugs"},{id:3,name:"server setup"}]

}



export default createStore(reducer,initialState);
