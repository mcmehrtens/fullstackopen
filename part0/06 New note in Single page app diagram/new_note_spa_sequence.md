# New Note SPA Sequence Diagram

The following sequence diagram demonstrates the steps that occur after a user presses the Save button on <https://studies.cs.helsinki.fi/exampleapp/spa> after writing a note in the input element.

```mermaid
sequenceDiagram
    participant B as Browser
    participant S as Server

    B->>+S: POST /exampleapp/new_note_spa
    Note right of B: HTTP POST request contains new note in JSON format

    S-->>-B: 201 Created + JSON file
    Note left of S: Server confirms resource creation was successful
    Note left of S: Server also sends back a JSON with the message, "note created"
```
