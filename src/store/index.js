import { configureStore } from '@reduxjs/toolkit'

import takeawayReducer from './modules/takeaway'

export default configureStore({
    reducer: {
        // 注册子模块
        takeaway: takeawayReducer
    }
})