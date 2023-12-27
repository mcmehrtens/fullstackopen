# New Note Sequence Diagram

The following sequence diagram demonstrates the steps that occur after a user presses the Save button on <https://studies.cs.helsinki.fi/exampleapp/notes> after writing a note in the input element.

```mermaid
sequenceDiagram
    participant B as Browser
    participant S as Server

    B->>+S: POST /exampleapp/new_note
    Note right of B: HTTP POST request contains form data

    S-->>-B: 302 /exampleapp/notes (redirect)
    activate B
    Note left of S: 302 response instructs browser to redirect to address

    B->>-S: GET /exampleapp/notes
    activate S
    Note right of B: browser requests the /exampleapp/notes HTML file

    S-->>-B: the HTML document
    activate B
    Note left of S: server sends the requested HTML file

    B->>-S: GET /exampleapp/main.css
    activate S
    Note right of B: browser requests the /exampleapp/main.css CSS file

    S-->>-B: the CSS file
    activate B
    Note left of S: server sends the requested CSS file

    B->>-S: GET /exampleapp/main.js
    activate S
    Note right of B: browser requests the /exampleapp/main.js JavaScript file

    S-->>-B: the JavaScript file
    activate B
    Note left of S: server sends the requested JavaScript file
    Note right of B: browser begins executing the JS file

    B->>-S: GET /exampleapp/data.json
    activate S
    Note right of B: browser request the /exampleapp/data.jason JSON file

    S-->>-B: the JSON file
    Note left of S: server sends the requested JSON file
```
