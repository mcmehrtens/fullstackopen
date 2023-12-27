# Single Page Application Load Sequence Diagram

The following sequence diagram demonstrates the steps that occur after a user loades an [example single page application](https://studies.cs.helsinki.fi/exampleapp/spa).

```mermaid
sequenceDiagram
    participant B as Browser
    participant S as Server

    B->>+S: GET /exampleapp/spa
    Note right of B: browser requests the /exampleapp/spa HTML file

    S-->>-B: the HTML document
    activate B
    Note left of S: server sends the requested HTML file

    B->>-S: GET /exampleapp/main.css
    activate S
    Note right of B: browser requests the /exampleapp/main.css CSS file

    S-->>-B: the CSS file
    activate B
    Note left of S: server sends the requested CSS file

    B->>-S: GET /exampleapp/spa.js
    activate S
    Note right of B: browser requests the /exampleapp/spa.js JavaScript file

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
