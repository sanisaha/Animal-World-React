import React, { Component } from 'react';
import Footer from './components/Footer';
import { animals, birds } from './animalsList';
import Navbar from './components/Navbar';
import AnimalHome from './UI/AnimalHome';
import BirdHome from './UI/BirdHome';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import List from './pages/List';

class App extends Component {
  state = {
    animals: animals,
    birds: birds,
    title: 'Living world',
    searchInput: '',
    data: []
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then(res => res.json())
    .then(data => this.setState({data: data.results}))
  }
  
  removeHandler = (name, title) => {
    const updatedArray = this.state[title].filter(item => item.name !== name)
    this.setState({
      [title]: updatedArray
    })
  }

  likesHandler = (name, action, list) => {
      const updatedArray = this.state[list].map((item) => {
        if (item.name === name) {
          if (action === 'add') {
            return { ...item, likes: item.likes + 1 }
          } else {
            return { ...item, likes: item.likes - 1
            }
          }
        } else {
          return item
        }
      })
            
      this.setState(
        {
          [list]: updatedArray
        }
      ) 
  }

  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }
  
  render() {
    return (
      <BrowserRouter>
      <div>
        <Navbar 
        animalData={this.state.animals}
        birdData={this.state.birds}
        searchInput={this.state.searchInput}
        ></Navbar>
      </div>
      <Routes>
        <Route path='/' element={<div className='animal-container'>
          <AnimalHome></AnimalHome>
          <BirdHome></BirdHome>
        </div>}></Route>
        <Route path='/animal' element={<List
          title = 'animals'
          data={this.state.animals}
          removeHandler={this.removeHandler}
          likesHandler={this.likesHandler}
          searchHandler={this.searchHandler}
          searchInput={this.state.searchInput} 
          />}></Route>
        <Route path='/bird' element={<List
          title = 'birds'
          data={this.state.birds}
          removeHandler={this.removeHandler}
          likesHandler={this.likesHandler}
          searchHandler={this.searchHandler}
          searchInput={this.state.searchInput}
          />}></Route>
        <Route path='/about' element={<About></About>}>
        </Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    );
  }
}

export default App;