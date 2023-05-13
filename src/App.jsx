import SideBar from "./components/SideBar/SideBar"
import Title from "./components/Title/Title"
import GotMilk from "./assets/gotMilk.png"

function App() {

  return (
    <>
    <div className="bg-[#262837] h-screen w-screen ">
      <SideBar/>
      <Title text={"Shop-Web"}>
        <img src={GotMilk} alt="Got Milk"/>
      </Title>
    </div>
    </>
  )
}

export default App
