import './App.css';
const tg = window.Telegram.WebApp;


class App extends Comment{
    render(){
      function App() {
        useEffect(()=>{
          tg.ready();
        },[])

    const onClose=()=>{
      tg.close()
    }
    return (
      <div className="App">
        work
        <button>Закрыть</button>
      </div>
    );
  }
  }
}
export default App;
