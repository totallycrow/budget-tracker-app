import Header from "./components/Header";

function App() {
  return (
    <div className="content-wrapper h-screen w-screen">
      <div className="container mx-auto py-10 px-8 border">
        <Header />
        <div className="app-body">
          <h2 className="font-bold">Body</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
