import {SafeAreaView, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Card from './components/Card';
import axios from 'axios';

const API = 'https://pokeapi.co/api/v2/pokemon';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function request() {
      await axios
        .get(API)
        .then(function (response) {
          setPokemons(response.data.results);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    request();
  }, [pokemons]);

  return (
    <SafeAreaView>
      <ScrollView>
        {pokemons.map(item => (
          <Card object={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
