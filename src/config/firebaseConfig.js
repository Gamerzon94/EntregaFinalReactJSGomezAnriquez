import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKg4ftN9tqYUsKVsSSpPq-Q0e736l8ZQQ",
  authDomain: "coderhouse-ecomerce-378b6.firebaseapp.com",
  projectId: "coderhouse-ecomerce-378b6",
  storageBucket: "coderhouse-ecomerce-378b6.appspot.com",
  messagingSenderId: "96618883755",
  appId: "1:96618883755:web:dee968ff24d10fc7a665ee"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);