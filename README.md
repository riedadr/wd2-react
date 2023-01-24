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
