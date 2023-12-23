import { configureStore } from "@reduxjs/toolkit";
import todoSlicer from "./component/todos/todoSlicer";
import loginSlicer from "./component/login/loginSlicer";

export default configureStore({
    reducer:{
        todos: todoSlicer,
        userLogin: loginSlicer,
    },
});