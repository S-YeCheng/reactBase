import {createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        foodsList: []
    },
    reducers: {
        setFoodsList(state, action) {
            state.foodsList = action.payload
        },
    }
})

const {setFoodsList} = foodsStore.actions;
// 异步获取数据
const fetchFoodsList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/takeaway')
        dispatch(setFoodsList(res.data))
    }
}

export {fetchFoodsList}

export default foodsStore.reducer