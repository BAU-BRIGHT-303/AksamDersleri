import { ref } from "../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import AddNews from "../components/AddNews";

export default function Home() {
  return (
    <div>
      <h1 className="text-center mt-4">Hoşgeldin Admin</h1>
      <AddNews />
    </div>
  );
}
