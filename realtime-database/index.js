import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Your Config Here

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function tambahData(id, nim, nama, email) {
  set(ref(db, "mahasiswa/" + id), {
    nim: nim,
    nama_lengkap: nama,
    email: email,
  });
}

function ambilSemuaData() {
  const mahasiswa = ref(db, "mahasiswa/");
  onValue(mahasiswa, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}

tambahData("username", "1203230040", "Nama Lengkap", "email@mail.com");
ambilSemuaData();
