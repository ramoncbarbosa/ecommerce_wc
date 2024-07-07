import { CustomCards } from "../CustomCards/CustomCards";


export function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <CustomCards/> 
        <CustomCards/> 
        <CustomCards/> 
        <CustomCards/>        
      </div>
    </main>
  );
}

export default Home;
