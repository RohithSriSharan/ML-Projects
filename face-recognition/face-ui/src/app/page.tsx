"use client";
import { useEffect, useState } from "react";
import {
  Brain,
  Camera,
  ChartBar,
  Menu,
  Server,
  WifiOff,
  CodeXml,
} from "lucide-react";
import FaceRecognition from "@/Components/FaceRecognition";

export default function Page() {
  const [ping, setPing] = useState("");
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const api = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  useEffect(() => {
    fetch(`${api}/ping`)
      .then((res) => res.json())
      .then((data) => setPing(data.message))
      .catch(() => setPing("error"));
  }, [api]);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-800/70 backdrop-blur-md border-b border-gray-700 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded hover:bg-gray-700 transition md:hidden"
          >
            <Menu className="w-6 h-6 text-gray-300" />
          </button>
          <h1 className="text-xl font-bold">ML Projects Dashboard</h1>
        </div>

        <div
          className={`flex items-center gap-2 px-4 py-1 rounded-xl text-sm font-medium shadow ${
            ping === "pong"
              ? "bg-green-900/40 text-green-400 border border-green-700"
              : "bg-red-900/40 text-red-400 border border-red-700"
          }`}
        >
          {ping === "pong" ? (
            <>
              <Server className="w-4 h-4" /> Connected
            </>
          ) : (
            <>
              <WifiOff className="w-4 h-4" /> Offline
            </>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "w-64" : "w-20"
          } bg-gray-800 border-r border-gray-700 shadow-lg flex flex-col transition-all duration-300`}
        >
          <nav className="flex-1 p-4 space-y-2">
            <button
              onClick={() => setActiveProject("face")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeProject === "face"
                  ? "bg-blue-600 text-white shadow"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              <Camera className="w-5 h-5" />
              {sidebarOpen && "Face Recognition"}
            </button>

            <button
              onClick={() => setActiveProject("sentiment")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeProject === "sentiment"
                  ? "bg-blue-600 text-white shadow"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              <Brain className="w-5 h-5" />
              {sidebarOpen && "Sentiment Analysis"}
            </button>

            <button
              onClick={() => setActiveProject("recommender")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                activeProject === "recommender"
                  ? "bg-blue-600 text-white shadow"
                  : "hover:bg-gray-700 text-gray-300"
              }`}
            >
              <ChartBar className="w-5 h-5" />
              {sidebarOpen && "Recommender System"}
            </button>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 overflow-y-auto">
          {!activeProject && (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 gap-3">
              <CodeXml className="w-10 h-10 opacity-40" />
              <p className="text-lg font-medium">
                Select a project from the sidebar to get started
              </p>
            </div>
          )}

          {activeProject === "face" && <FaceRecognition />}
          {activeProject === "sentiment" && (
            <div className="bg-gray-800/70 rounded-xl shadow p-6 flex flex-col items-center gap-3 text-gray-300">
              <Brain className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl font-bold">Sentiment Analysis</h2>
              <p className="text-gray-400">🚧 Coming soon</p>
            </div>
          )}
          {activeProject === "recommender" && (
            <div className="bg-gray-800/70 rounded-xl shadow p-6 flex flex-col items-center gap-3 text-gray-300">
              <ChartBar className="w-8 h-8 text-blue-400" />
              <h2 className="text-xl font-bold">Recommender System</h2>
              <p className="text-gray-400">🚧 Coming soon</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
