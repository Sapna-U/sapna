"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState<string[]>([]);

  // Load saved tasks
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save tasks whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!task.trim()) return;

    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-slate-950 flex items-center justify-center p-5 overflow-hidden">

      <Link
        href="/"
        className="absolute top-5 left-5 bg-cyan-500/20 text-white px-5 py-2 rounded-xl border border-cyan-400/30 hover:scale-105 transition-all duration-300 backdrop-blur-md z-50"
      >
        🏠 Home
      </Link>

      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>

      <div className="relative w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] shadow-2xl p-8">

        <h1 className="text-5xl font-extrabold text-center text-white mb-3">
          📝 Todo App
        </h1>

        <p className="text-center text-slate-300 mb-8">
          Organize your daily tasks
        </p>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            className="flex-1 p-4 rounded-2xl bg-white/20 text-white placeholder-slate-300 border border-white/20 outline-none"
          />

          <button
            onClick={addTodo}
            className="px-6 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-2xl font-semibold"
          >
            Add
          </button>
        </div>

        <div className="mt-5 text-slate-300">
          Total Tasks: {todos.length}
        </div>

        <div className="mt-6 space-y-4">
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white/10 border border-white/20 rounded-2xl p-4 text-white"
              >
                <span>{todo}</span>

                <button
                  onClick={() => deleteTodo(index)}
                  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-xl text-white"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <div className="text-center text-slate-400 py-8">
              📋 No tasks added yet
            </div>
          )}
        </div>

      </div>
    </div>
  );
}