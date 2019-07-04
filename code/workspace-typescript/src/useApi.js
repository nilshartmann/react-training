import React from "react";

// TODO: ----------------------------------------------------------------

// 1. DEFINIERE TYPEN FÜR DIE METHODEN PARAMETER:
//     'url' soll ein String sein (Pflicht-Angabe)
//     'initialValue' soll ein von außen setzbarer Typ (T) sein
//     dazu muss die Methode mit einem Typ-Parameter versehen werden
//

// 2. SETZE DEN RÜCKGABE WERT FÜR DIE FUNKTION.

//   VARIANTE 1:
//    Setze einen expliziten Rückgabe-Typ.
//    Der Typ dafür ist hier bereits für dich definiert
//    (Ein Array, bestehend aus:
//       1. dem aktuellen Wert,
//       2. Setter-Methode,
//       3. isLoading true/false
//    )
// type UseApiResult<T> = [T, React.Dispatch<React.SetStateAction<T>>, boolean];
//
//  ODER VARIANTE 2:
//   Definiere den Rückgabewert als "Tuple"
//    (as const)

export default function useApi(url, initialValue) {
  const [isLoading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(initialValue);

  React.useEffect(
    () => {
      async function loadData() {
        try {
          setLoading(true);
          setData(initialValue);
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
        } catch (err) {
          console.error("LOADING DATA FAILED:", err);
          setData(initialValue);
        } finally {
          setLoading(false);
        }
      }
      loadData();
    },
    // Make sure, this Hook only runs (after initial) when URL changes
    [url]
  );

  return [data, setData, isLoading];
}
