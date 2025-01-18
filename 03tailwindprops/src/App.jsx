import MediaCard from "./components/MediaCard";

function App() {
  const marks = [10, 20, 303, 70];
  const subjects = {
    name: "Maths",
    teacher: "Mohammad",
  };
  return (
    <>
      <MediaCard
        name="Taqueveem"
        rollNo={48}
        marks={marks}
        subjects={subjects}
      />
      <MediaCard
        name="Taqueveem"
        rollNo={48}
        marks={marks}
        subjects={subjects}
      />
    </>
  );
}

export default App;
