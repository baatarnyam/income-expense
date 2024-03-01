import "@/styles/globals.css";
import AddRecord from "@/components/AddRecord";
import UserProvider from "@/components/UserProvider";
import AddcategoryContext from "@/components/context/AddcategoryContext";
import ChooseCategoryContext from "@/components/context/ChooseCategoryContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <AddRecord>
        <AddcategoryContext>
          <ChooseCategoryContext>
            <Component {...pageProps} />
          </ChooseCategoryContext>
        </AddcategoryContext>
      </AddRecord>
    </UserProvider>
  );
}

/* <AddRecord>
        <AddcategoryContext>
          <ChooseCategoryContext> */

/* </ChooseCategoryContext>
        </AddcategoryContext>
      </AddRecord> */
