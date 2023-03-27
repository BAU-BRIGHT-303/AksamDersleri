import { deleteDoc, doc } from "firebase/firestore";

const deleteForm = document.getElementById("delete");

deleteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const docRef = doc(db, "haberler", deleteForm.Baslik.value);
  deleteDoc(docRef).then(() => {
    alert("silme işlemi gerçekleştirildi.");
  });
});
