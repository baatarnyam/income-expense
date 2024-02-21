import "@/styles/globals.css";
import Context from "@/components/Context";
import AddRecord from "@/components/AddRecord";

export default function App({ Component, pageProps }) {
  return (
    <AddRecord>
      <Component {...pageProps} />
    </AddRecord>
  );
}
