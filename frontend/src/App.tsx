import { useState } from "react";

function App() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(1);
  const [budget, setBudget] = useState(0);
  const [activities, setActivities] = useState<string[]>([]);
  const [travelType, setTravelType] = useState("cultural");

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
  travelType,
}),
    });

    const data = await response.json();

    setActivities(data.activities);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-700 flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
      <h1 className="text-4xl font-bold text-center mb-2">
      SmartTrip AI ✈️
      </h1>

<p className="text-center text-gray-600 mb-6">
  Descubre experiencias únicas adaptadas a tu forma de viajar
</p>

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
    Tipo de viaje
  </label>

  <select
    value={travelType}
    onChange={(e) => setTravelType(e.target.value)}
    className="w-full border rounded-lg p-3"
  >
    <option value="cultural">Cultural</option>
    <option value="aventura">Aventura</option>
    <option value="gastronomico">Gastronómico</option>
    <option value="romantico">Romántico</option>
  </select>
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
            
            <h2 className="text-2xl font-bold mb-4 text-blue-700">
            Tu Itinerario Personalizado
            </h2>


            <ul className="space-y-2">
              {activities.map((activity, index) => (
              <li
                key={index}
                className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 p-4 rounded-xl shadow-sm"
>
  📍 {activity}
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
