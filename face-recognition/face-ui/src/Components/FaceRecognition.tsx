"use client";
import { useState } from "react";
import { Upload, Loader2, CheckCircle, XCircle } from "lucide-react";

export default function FaceRecognition() {
  const [img, setImg] = useState<File | null>(null);
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const api = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  async function handleRecognize() {
    if (!img) return;
    setLoading(true);
    setResult(null);

    const fd = new FormData();
    fd.append("image", img);

    try {
      const res = await fetch(`${api}/recognize`, { method: "POST", body: fd });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ error: "Recognition failed" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-full bg-gray-900 rounded-xl border border-gray-700 p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-100">Face Recognition</h2>

      {/* Strict side-by-side */}
      <div className="flex flex-row flex-nowrap gap-8 w-full">
        {/* Left: Upload (40%) */}
        <section className="basis-2/5 min-w-0 flex flex-col">
          <div className="flex-1 p-6 border-2 border-dashed border-gray-700 rounded-xl flex flex-col items-center justify-center text-center hover:border-blue-500 hover:bg-gray-800/50 transition">
            <Upload className="w-10 h-10 text-blue-400 mb-3" />
            <p className="text-gray-400 font-medium">Drag & drop or click to upload</p>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="fileInput"
              onChange={(e) => setImg(e.target.files?.[0] || null)}
            />
            <label
              htmlFor="fileInput"
              className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-lg cursor-pointer hover:bg-blue-700 transition"
            >
              Choose File
            </label>

            {img && (
              <img
                src={URL.createObjectURL(img)}
                className="mt-4 max-h-60 max-w-full object-contain rounded-lg border border-gray-700"
                alt="Preview"
              />
            )}
          </div>

          <button
            onClick={handleRecognize}
            disabled={!img || loading}
            className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:bg-gray-600 transition"
          >
            {loading ? (<><Loader2 className="w-5 h-5 animate-spin" /> Recognizing…</>) : ("Recognize Face")}
          </button>
        </section>

        {/* Right: Results (60%) */}
        <section className="basis-3/5 min-w-0 flex items-center justify-center">
          {result ? (
            <div className="w-full p-6 rounded-xl bg-gray-800 border border-gray-700 text-center">
              {result.error ? (
                <div className="flex flex-col items-center gap-2 text-red-400">
                  <XCircle className="w-12 h-12" />
                  <p className="font-semibold">Error: {result.error}</p>
                </div>
              ) : (
                <>
                  <div className="flex flex-col items-center gap-2 mb-4">
                    {result.match === "Unknown" ? (
                      <>
                        <XCircle className="w-12 h-12 text-red-400" />
                        <p className="text-lg font-semibold text-red-400">Unknown ❌</p>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-12 h-12 text-green-400" />
                        <p className="text-lg font-semibold text-green-400">{result.match} </p>
                      </>
                    )}
                  </div>
                  <div className="space-y-2 text-gray-400 text-sm">
                    <p><span className="font-medium text-gray-200">Similarity:</span> {result.similarity?.toFixed(4)}</p>
                    <p><span className="font-medium text-gray-200">Model:</span> {result.model}</p>
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="w-full h-60 flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-700 rounded-xl">
              Results will appear here
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
