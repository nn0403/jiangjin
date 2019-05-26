import url from "../../utils/url"
import { FETCH_DATA } from "../middleware/api"
import { schema } from "./entities/products"
import { combineReducers } from "redux";

export const types = {
    //获取轮播图请求
    FETCH_SLIDER_REQUEST: "HOME/FETCH_SLIDER_REQUEST",
    //获取轮播图请求成功
    FETCH_SLIDER_SUCCESS: "HOME/FETCH_SLIDER_SUCCESS",
    //获取轮播图请求失败
    FETCH_SLIDER_FAILURE: "HOME/FETCH_SLIDER_FAILURE",

    //获取筹集列表请求
    FETCH_RAISE_REQUEST: "HOME/FETCH_RAISE_REQUEST",
    //获取筹集列表请求成功
    FETCH_RAISE_SUCCESS: "HOME/FETCH_RAISE_SUCCESS",
    //获取筹集列表请求失败
    FETCH_RAISE_FAILURE: "HOME/FETCH_RAISE_FAILURE",
};

const initialState = {
    slider: {
        isFetching: false,
        ids: []
    },
    raiseList: {
        isFetching: false,
        ids: []
    }
};

export const actions = {
    // 加载轮播图数据
    loadSlider: () => {
        return (dispatch, getState) => {
            const endpoint = url.getSliderItem();
            return dispatch(fetchSlider(endpoint));
        }
    },

    // 加载筹集列表
    loadRaiseList: () => {
        return (dispatch, getState) => {
            const endpoint = url.getRaiseList();
            return dispatch(fetchRaise(endpoint));
        }
    }
};

const fetchSlider = (endpoint) => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_SLIDER_REQUEST,
            types.FETCH_SLIDER_SUCCESS,
            types.FETCH_SLIDER_FAILURE
        ],
        endpoint,
        schema
    }
});

const fetchRaise = (endpoint) => ({
    [FETCH_DATA]: {
        types: [
            types.FETCH_RAISE_REQUEST,
            types.FETCH_RAISE_SUCCESS,
            types.FETCH_RAISE_FAILURE
        ],
        endpoint,
        schema
    }
});

// 轮播图reducer
const Slider = (state = initialState.slider, action) => {
    switch(action.type) {
        case types.FETCH_SLIDER_REQUEST:
            return { ...state, isFetching: true };
        case types.FETCH_SLIDER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ids: state.ids.concat(action.response.id)
            };
        case types.FETCH_SLIDER_FAILURE:
            return { ...state, isFetching: false };
        default:
            return state;
    }
};

// 众筹商品reducer
const Raise = (state = initialState.raiseList, action) => {
    switch(action.type) {
        case types.FETCH_RAISE_REQUEST:
            return { ...state, isFetching: true };
        case types.FETCH_RAISE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                ids: state.ids.concat(action.response.id)
            };
        case types.FETCH_RAISE_FAILURE:
            return { ...state, isFetching: false };
        default:
            return state;
    }
};

const reducer = combineReducers({
    Raise,
    Slider
});

export default reducer;

// 定义 selectors函数
export const getSlider = state => {
    return state.home.Slider.ids.map(id => {
        return state.entities.information[id];
    })
};

export const getRaise = state => {
    return state.home.Raise.ids.map(id => {
        return state.entities.products[id];
    })
};

