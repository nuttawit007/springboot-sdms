import { useEffect, useState } from "react";
import { getText } from "./api/http";

export default function App() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    getText("/api/test")
      .then(setStatus)
      .catch(() => setStatus("Backend not reachable"));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 rounded-xl shadow">
        <div className="text-xl font-bold">Frontend ↔ Backend</div>
        <div className="mt-3 font-mono">{status}</div>
      </div>
    </div>
  );
}
