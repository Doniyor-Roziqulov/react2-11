import { api } from "../../api/index";

export const todoApi = api.injectEndpoints({
    endpoints: (build) => ({
        getTodos: build.query({
            query: (params) => ({
                url: "/todos",
                params,
            }),
            providesTags: ["todosApi"],
        }),
        updateTodo: build.mutation({
            query: ({ id, body }) => ({
                url: `/todos/${id}`,
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["todosApi"],
        }),
        deleteTodo: build.mutation({
            query: ({ id }) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["todosApi"],
        }),
        createTodo: build.mutation({
            query: (body) => ({
                url: "/todos",
                method: "POST",
                body,
            }),
            providesTags: ["todosApi"],
        }),
    }),
});

export const {
    useGetTodosQuery,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
    useCreateTodoMutation,
} = todoApi;
