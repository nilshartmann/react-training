import React from "react";
import PostList from "./PostList";
import { gql, useQuery } from "@apollo/client";

const PostListPageQuery = gql`
  # TODO 1: Schreibe hier einen GraphQL-Query, der die Posts vom Backend liest
  #  Wir benötigen jeweils title, teaser und id
`;

export default function PostListPage(props) {
  // TODO 2:
  //   Führe den Query hier mit 'useQuery' aus
  //    - Während die Daten noch geladen werden, gib eine "Bitte warten Sie"-Meldung aus
  //    - Falls es einen Fehler beim Laden gibt, gib eine Fehlermeldung aus
  //    - Wenn die Daten erfolgreich geladen wurden, übergib sie an 'PostList'
  //      (leeres posts-Array unten ersetzen!)

  return <PostList posts={[]} />;
}
