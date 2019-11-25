import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import useTitle from "./useTitle";

function formattedDate(date) {
  return moment(date).format("DD.MM.YYYY");
}

export default function BlogListPage() {
  // Hier initialisieren wir jetzt den Zustand mit einem
  // leeren Array, da wir beim Starten der Anwendung und dem
  // initialen Rendern der Komponente noch keine Daten geladen
  // haben. Im allerersten Schritt wird somit zunächst eine leere
  // Liste angezeigt
  const [posts, setPosts] = React.useState([]);

  useTitle("Blog Posts");

  // Sobald die App-Komponente das erste Mal
  // gerendert wurde (also beim Start der Anwendung),
  // sollen automatisch die Daten geladen werden
  // Dazu registrieren wir einen "Effekt", da in der
  // Render-Phase der Komponente keine Nebeneffekte
  // verwendet werden dürfen
  React.useEffect(() => {
    fetch("http://localhost:7000/posts?short")
      .then(response => response.json())
      .then(json => {
        // Die Daten sind vom Server geladen
        // Hier setzen wir sie in den State der Komponente
        //  Die Komponente wird dann von React neu gerendert,
        // und die Posts werden angezeigt
        setPosts(json);
      });
  }, []);

  return posts.map(p => (
    <article key={p.id} className="Container SelectableContainer">
      <Link to={`/post/${p.id}`}>
        <p className="Date">{formattedDate(p.date)}</p>
        <h1 className="Abstract">{p.title}</h1>
        <p className="ReadMore">Read more...</p>
      </Link>
    </article>
  ));
}
