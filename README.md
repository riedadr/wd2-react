# wd2-react

Übung für Klausur: Einkaufsliste mit React aus Class Components.

## Aufgabe

Erstellen Sie eine Einkaufsliste mit [React](https://getbootstrap.com/docs/5.3/getting-started/introduction/). Hierbei sollen Class Components verwendet werden.
Die Lösung der Aufgabe finden Sie in diesem Repository.

Die Liste soll im State gespeichert werden. Die Elemente der Liste sollen gemappt und an eine Komponente `Artikel` zusammen mit den Props `name` und `menge` übergeben werden.

```js
this.state.liste.map((element) => <Artikel key={element.id} name={element.name} menge={element.menge}>)
```

Zum Styling soll [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) eingesetzt werden.

---

## Durchführung

### Vorlage

1. React-App aus Template erstellen

   ```sh
   npx create-react-app <app-name>
   ```

2. unnötige Datein in `/src` entfernen: App.test.js, setupTest.js

   ```txt
   src/
   ├── App.css
   ├── App.js
   ├── index.css
   ├── index.js
   ├── logo.svg
   └── reportWebVitals.js
   ```

3. Bootstrap in `/public/index.html` einbinden:

   ```html
   <html lang="de">
      <head>
         ...
         <title>Einkaufsliste</title>
         <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
            crossorigin="anonymous"
         />
      </head>
      <body>
         <noscript>You need to enable JavaScript to run this app.</noscript>
         <div id="root"></div>
         <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
            crossorigin="anonymous"
         ></script>
      </body>
   </html>
   ```

4. App.js in Class Component konvertieren:

   ```js
   import React from "react";
   import "./App.css";

   export default class App extends React.Component {
      render() {
         return <div>App</div>;
      }
   }
   ```

## Umsetzung

1. State in `App.js` festlegen:

   ```js
   constructor(props) {
      super(props);
      this.state = {
         liste: [],
         eingabe: {name: "", menge: ""}
      }
   }
   ```

2. Formular zum Hinzufügen eines Artikels:

   ```html
   <form className="d-flex gap-2" onSubmit={this.addItem.bind(this)}>
      <input
         type="text"
         name="name"
         placeholder="Name"
         value={this.state.eingabe.name}
         onChange={this.setInput.bind(this)}
      />
      <input
         type="number"
         name="menge"
         placeholder="Menge"
         value={this.state.eingabe.menge}
         onChange={this.setInput.bind(this)}
      />
      <button
         className="bg-success border border-success text-white"
         type="submit"
         title="hinzufügen"
      >
         +
      </button>
   </form>
   ```

   ```js
   addItem(e) {
      e.preventDefault();

      const newItem = {
         ...this.state.eingabe,    // name: this.state.eingabe.name, menge: this.state.eingabe.menge
         id: this.state.liste.length + 1,
      };

      this.setState({
         liste: [...this.state.liste, newItem],
      });
   }
   ```

   ```js
   setInput(e) {
      const { name, value } = e.target;
      this.setState({
         eingabe: {
            ...this.state.eingabe,
            [name]: value,
         },
      });
   }
   ```

3. Komponente Artikel in `/src/Artikel.jsx` implementieren:

   ```js
   import React from "react";

   export default class Artikel extends React.Component {
      render() {
         return (
            <li>
               {this.props.name} ({this.props.menge})
            </li>
         );
      }
   }
   ```

4. Liste mit map() ausgeben:

   ```js
   <ul>
      {this.state.liste.map((element) => (
         <Artikel key={element.id} name={element.name} menge={element.menge} />
      ))}
   </ul>
   ```

   (`key` wird benötigt, um Elemente in Maps identifizieren zu können; für uns nicht relevant)
