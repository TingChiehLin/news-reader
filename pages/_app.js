import "../styles/globals.css";
import NavBar from "../layouts/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative min-h-screen">
      <NavBar />
      <Component {...pageProps} />
      <footer className="absolute bottom-0 w-full h-12 bg-orange-500 flex items-center justify-center text-white">
        <p className="text-white">© 2022</p>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer ml-1"
        >
          News-Rader
        </a>
      </footer>
    </div>
  );
}

export default MyApp;
