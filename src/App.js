import "./App.css";

// import "../public/sounds.wav"

function App() {
  const notes = [
    { key: "A", label: "CLAP", sound: "/sounds/A.wav" },
    { key: "S", label: "HIHAT", sound: "/sounds/S.wav" },
    { key: "D", label: "KICK", sound: "/sounds/D.wav" },
    { key: "F", label: "OPENHAT", sound: "/sounds/F.wav" },
    { key: "G", label: "BOOM", sound: "/sounds/G.wav" },
    { key: "H", label: "RIDE", sound: "/sounds/H.wav" },
    { key: "J", label: "SNARE", sound: "/sounds/J.wav" },
    { key: "K", label: "TOM", sound: "/sounds/K.wav" },
    { key: "L", label: "TINK", sound: "/sounds/L.wav" },
  ];

  const start = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className="App">
      <div className="App-header">
        {notes.map(({ key, label, sound }) => {
          return (
            <div
              key={key}
              onClick={() => {
                start(sound);
              }}
              className="notes-container"
            >
              <p className="notes">{key}</p>
              <p>{label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
