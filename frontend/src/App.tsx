import { useState } from "react";
import MapComponent from "./MapComponent";

function App() {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState(1);
  const [budget, setBudget] = useState(0);
  const [activities, setActivities] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [travelType, setTravelType] = useState("cultural");
  const travelIcons: Record<string, string> = {
  cultural: "🏛️",
  gastronomico: "🍝",
  aventura: "⛰️",
  romantico: "❤️",
};
  const destinationCoordinates: Record<string, [number, number]> = {
  barcelona: [41.3851, 2.1734],
  roma: [41.9028, 12.4964],
  paris: [48.8566, 2.3522],
};

const coordinates =
  destinationCoordinates[destination.toLowerCase()] ??
  [41.3851, 2.1734];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);

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
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-700 flex items-center justify-center p-8">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden w-full max-w-xl">

        {/* Hero */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8">
          <h1 className="text-4xl font-bold mb-2">
            SmartTrip AI ✈️
          </h1>

          <p className="text-blue-100">
            Descubre experiencias únicas adaptadas a tu forma de viajar
          </p>
        </div>

        {/* Contenido */}
        <div className="p-8">
          <div className="mb-6">
          {travelType === "cultural" && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h3 className="font-bold text-blue-700">
            🏛️ Viaje Cultural
            </h3>
            <p className="text-sm text-gray-600">
            Explora la historia, el arte y los monumentos más emblemáticos.
          </p>
    </div>
  )}

    {travelType === "gastronomico" && (
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
      <h3 className="font-bold text-orange-700">
        🍝 Viaje Gastronómico
      </h3>
      <p className="text-sm text-gray-600">
        Descubre sabores auténticos y experiencias culinarias únicas.
      </p>
    </div>
  )}

  {travelType === "aventura" && (
    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
      <h3 className="font-bold text-green-700">
        ⛰️ Viaje de Aventura
      </h3>
      <p className="text-sm text-gray-600">
        Vive experiencias al aire libre y actividades emocionantes.
      </p>
    </div>
  )}

  {travelType === "romantico" && (
    <div className="bg-pink-50 border border-pink-200 rounded-xl p-4">
      <h3 className="font-bold text-pink-700">
        ❤️ Viaje Romántico
      </h3>
      <p className="text-sm text-gray-600">
        Disfruta de lugares especiales y momentos inolvidables.
      </p>
    </div>
  )}
</div>

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label className="block font-medium mb-1">
                Destino
              </label>

              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Ej: Roma"
                className="w-full border rounded-lg p-3"
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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg disabled:bg-gray-400"
            >
              {loading
                ? "Generando itinerario..."
                : "Generar viaje"}
            </button>

          </form>
          <div className="mt-6">
  <MapComponent
    position={coordinates}
    destination={destination}
  />
</div>
          {activities.length > 0 && (
            <div className="mt-8">

            <h2 className="text-2xl font-bold mb-2 text-blue-700">
              {travelIcons[travelType]} Tu Itinerario Personalizado
            </h2>
            <p className="text-gray-500 mb-4">
            Destino seleccionado: {destination}
            </p>

              <ul className="space-y-3">
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
    </div>
  );
}

export default App;