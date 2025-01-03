import Image from "next/image";
import ToDoListContainer from "./components/UI/list/ListContainer";
import HeaderContainer from "./components/UI/header/HeaderContainer";
import TileGame from "./components/TileGame/TileGame";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeaderContainer />
      <TileGame />
      <ToDoListContainer />
    </main>
  );
}
