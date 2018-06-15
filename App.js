import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Quote from './js/components/Quote';

const data = [
  {
    text:
      'Probleme kann man niemals mit derselben Denkweise lösen, durch die sie entstanden sind.',
    author: 'Albert Einstein'
  },
  {
    text:
      'Man braucht nichts im Leben zu fürchten, man muss nur alles verstehen.',
    author: 'Marie Curie'
  },
  { text: 'Nichts ist so beständig wie der Wandel.', author: 'Heraklit' }
];

export default class App extends Component {
  state = { index: 0 }; // initialer Zustand

  // render: Darstellung der Komponente im UI
  // render wird automatisch ausgeführt:
  // a) Komponente erscheint im UI (initialer Zustand in state)
  // b) Zustand ändert sich (state) [ ==> this.setState(...)]
  // c) props sich ändern
  render() {
    let index = this.state.index;
    const quote = data[index];
    let nextIndex = index + 1;
    if (nextIndex === data.length) nextIndex = 0;
    return (
      <View style={styles.container}>
        <Quote text={quote.text} author={quote.author} />
        <Button
          title="Nächstes Zitat"
          onPress={() => this.setState({ index: nextIndex })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
