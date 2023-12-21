import { configureStore } from "@reduxjs/toolkit";
import todoSlicer from "./component/todos/todoSlicer";

export default configureStore({
    reducer:{
        todos: todoSlicer,
    },
});