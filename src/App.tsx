import { AddTodo, TodoList } from "./components/Todo";

function App() {
        return (
                <main className="w-screen h-screen bg-zinc-900 flex justify-center items-center flex-col gap-8">
                        <AddTodo />

                        <TodoList />
                </main>
        );
}

export default App;
