import {createStore} from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
    // Modify State
    switch (action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
}

// Store 생성
const countStore = createStore(countModifier);

// Store에 변화가 생겼을 때 할 일을 기재
const onChange = () => {
    number.innerText = countStore.getState();
}

countStore.subscribe(onChange);

plus.addEventListener("click", () => countStore.dispatch({type: ADD}));
minus.addEventListener("click", () => countStore.dispatch({type: MINUS}));
