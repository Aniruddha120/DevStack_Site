import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MainLayout from "./components/MainLayout";
import type { Technology } from "./types";

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleAddToStack = (tech: Technology) => {
    if (stack.some((item) => item.id === tech.id)) {
      toast.warning("Already added!");
      return;
    }
    setStack((previousStack) => [...previousStack, tech]);
    toast.success("Technology added!");
  };

  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) =>
      previousStack.filter((item) => item.id !== id),
    );
    toast.info("Technology removed!");
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed!");
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }
        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch {
        setError("Sorry, we couldn't load the technologies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <main>
        {loading ? (
          <div className="flex justify-center py-24">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-pink-500" />
          </div>
        ) : error ? (
          <p className="py-24 text-center text-red-500">{error}</p>
        ) : (
          <MainLayout
            technologies={technologies}
            stack={stack}
            handleAddToStack={handleAddToStack}
            handleRemoveFromStack={handleRemoveFromStack}
            handleRemoveAll={handleRemoveAll}
          />
        )}
      </main>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
