import { useState } from "react";

function App() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(1);
  const [budget, setBudget] = useState(0);
  const [activities, setActivities] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8080/api/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        destination,
        days,
        budget,
      }),
    });

    const data = await response.json();

    setActivities(data.activities);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
        <h1 className="text-4xl font-bold text-center mb-6">
          SmartTrip AI ✈️
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">
              Destino
            </label>

            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full border rounded-lg p-3"
              placeholder="Ej: Roma"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Días
            </label>

            <input
              type="number"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Presupuesto (€)
            </label>

            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full border rounded-lg p-3"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
          >
            Generar viaje
          </button>
        </form>

        {activities.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">
              Itinerario
            </h2>

            <ul className="space-y-2">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className="bg-slate-100 p-3 rounded-lg"
                >
                  ✅ {activity}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
