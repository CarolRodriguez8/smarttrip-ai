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
    <div>
      <h1>SmartTrip AI ✈️</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Destino</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        <div>
          <label>Días</label>
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Presupuesto</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </div>

        <button type="submit">
          Generar viaje
        </button>
      </form>

      <hr />

      <p>Destino: {destination}</p>
      <h2>Itinerario</h2>

<ul>
  {activities.map((activity, index) => (
    <li key={index}>{activity}</li>
  ))}
</ul>
      <p>Días: {days}</p>
      <p>Presupuesto: {budget}€</p>
    </div>
  );
}

export default App;
