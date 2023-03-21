import { faTv } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="mx-auto max-w-5xl bg-zinc-50">
      <header className="flex p-1 text-4xl gap-4">
        <FontAwesomeIcon icon={faTv} />
        <h1>Rovani's Shows To Watch</h1>
      </header>
      <p>
        List of shows that I am actively watching, want to watch, or recommend watching. Since I can't keep track of
        them, I built a website to keep track of the shows for me.
      </p>
      <p>
        Additionally, this side project serves as a sandbox environment for me to learn using React, Vite, Typescript,
        Tailwind, Fontawesome, Netlify functions, and other technologies and libraries.
      </p>
    </div>
  );
}

export default App;
