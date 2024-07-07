import { CustomCards } from "../CustomCards/CustomCards";
import { FooterComponent } from "../FooterComponent/FooterComponent";
import { Header } from "../Header/Header";


export function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <Header/>
        <CustomCards/> 
        <CustomCards/> 
        <CustomCards/> 
        <CustomCards/>
        <FooterComponent/>        
      </div>
    </main>
  );
}

export default Home;
