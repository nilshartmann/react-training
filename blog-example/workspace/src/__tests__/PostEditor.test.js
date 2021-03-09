import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostEditor from "../PostEditor";

// TODO: Schreibe einen Test fuer den PostEditor

// 1. Testcase:
//    - Render den PostEditor und uebergebe ein Mock-Funktion (jest.fn()) als 'onSavePost' property
//    - Suche das title und body input-Feld (z.B. an Hand ihres Labels ("Title" bzw. "Body"))
//    - Befuelle beide Felder
//    - Suche nach dem Save Button
//    - Simuliere ein Click auf dem Save-Button (userEvent.click)
//    - stelle mit expect sicher, dass die Callback-Funktion, die Du fuer "onSavePost" uebergeben hast,
//       - einmal aufgerufen wurde
//
//    Optional:
//    - Stelle sicher, dass die onSave-Callback-Funktion nicht nur aufgerufen wurde, sondern
//      dass sie auch die korrekten Parameter uebergeben bekommen hat:
//      (Zur Erinnerung: das sollte ein Objekt mit 'title' und 'body' und den Werten, die Du im
//      Test "eingegeben" hast, sein)
