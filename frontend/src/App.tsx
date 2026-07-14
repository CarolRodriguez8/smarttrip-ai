function App() {
  return (
    <div>
      <h1>SmartTrip AI ✈️</h1>

      <form>
        <div>
          <label>Destino</label>
          <input type="text" />
        </div>

        <div>
          <label>Días</label>
          <input type="number" />
        </div>

        <div>
          <label>Presupuesto</label>
          <input type="number" />
        </div>

        <button type="submit">
          Generar viaje
        </button>
      </form>
    </div>
  );
}

export default App;