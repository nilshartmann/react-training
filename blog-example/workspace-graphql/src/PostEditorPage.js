import { gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import PostEditor from "./PostEditor";

const AddBlogPostMuation = gql`
  mutation AddBlogPostMutation($postData: NewBlogPost!) {
    newPost: createBlogPost(postData: $postData) {
      error
      blogPost {
        id
        title
        date
        body
        user {
          id
          name
        }
      }
    }
  }
`;

export default function PostEditorPage() {
  // TODO: Führe die AddBlogPostMutation mit useMutation aus
  //
  //       - Verwende aus dem Rückgabewert:
  //           - mutate
  //           - error, data, called
  //         (API Doku: https://www.apollographql.com/docs/react/data/mutations/#usemutation-api)
  //
  //       - In der Funktion 'savePost' sollte der übergebene Post gespeichert werden
  //              (Name der Variablen in der GraphQL Mutation "postData")

  //   - Wenn die useMutation-Funktion erfolgreich ausgeführt wurde,
  //     soll die SuccessConfirmation-Komponente angezeigt werden
  //   - Wenn es einen Fehler gab, soll der Fehler an den PostEditor weitergegeben werden

  function savePost(post) {
    // TODO: Führe die Mutation aus
    //         - übergib 'post' als 'postData'-GraphQL-Variable an die Mutation
  }

  // TODO:
  //    Lies das 'error'-Feld aus der Antwort der Mutation
  //    falls es gesetzt ist, setze es an 'errorMessage', so
  //    dass der PostEditor die Fehlermeldung darstellen kann
  const errorMessage = null;

  return <PostEditor onSavePost={savePost} error={errorMessage} />;
}

function SuccessConfirmation() {
  return (
    <div className="Container">
      <h1>Your new post have been saved.</h1>
      <Link className="Button" to="/">
        Home
      </Link>
    </div>
  );
}
