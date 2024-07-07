import { FooterComponent } from "./components/FooterComponent/FooterComponent";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

export default function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <Header/>
      <Home/>
      <FooterComponent/>
    </h1>
  )
}