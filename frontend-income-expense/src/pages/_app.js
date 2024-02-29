import "@/styles/globals.css";
import AddRecord from "@/components/AddRecord";
// import { UserContext } from "@/components/UserProvider";
import AddcategoryContext from "@/components/context/AddcategoryContext";
import ChooseCategoryContext from "@/components/context/ChooseCategoryContext";

export default function App({ Component, pageProps }) {
  return (
    // <UserContext>
    <AddRecord>
      <AddcategoryContext>
        <ChooseCategoryContext>
          <Component {...pageProps} />
        </ChooseCategoryContext>
      </AddcategoryContext>
    </AddRecord>
    // </UserContext>
  );
}
