import {createStore} from "redux";

const plus = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count === 0, action) => {
    // Modify State
    if (action.type === "ADD") {
        return count + 1;
    } else if (action.type === "MINUS") {
        return count - 1;
    } else {
        return count;
    }
}

// Store 생성
const countStore = createStore(countModifier);

// action 전달
countStore.dispatch({type: "ADD"});

// State 출력
console.log(countStore.getState());
