import React, { Component } from 'react';
import Animals from './Animals';
import Footer from './Footer';
import { animals, birds } from './animalsList';
import Navbar from './Navbar';
import AnimalHome from './AnimalHome';
import BirdHome from './BirdHome';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bird from './Bird';

class App extends Component {
  state = {
    animals: animals,
    birds: birds,
    title: 'Living world',
    searchInput: ''
  }

  removeHandler = (name) => {
    const updatedArray = this.state.animals.filter(animal => animal.name !== name)
    this.setState({
      animals: updatedArray
    })
  }
  removeHandlerBird = (name) => {
    const updatedArray = this.state.birds.filter(bird => bird.name !== name)
    this.setState({
      birds: updatedArray
    })
  }

  likesHandler = (name, action) => {
    this.setState((prevState) => {
      const updatedArray = prevState.animals.map((animal) => {
        if (animal.name === name) {
          if (action === 'add') {
            return { ...animal, likes: animal.likes + 1 }
          } else {
            return { ...animal, likes: animal.likes - 1 }
          }
        } else {
          return animal
        }
      })
      return {
        animals: updatedArray
      }
    })
  }
  likesHandlerBird = (name, action) => {
    this.setState((prevState) => {
      const updatedArray = prevState.birds.map((bird) => {
        if (bird.name === name) {
          if (action === 'add') {
            return { ...bird, likes: bird.likes + 1 }
          } else {
            return { ...bird, likes: bird.likes - 1 }
          }
        } else {
          return bird
        }
      })
      return {
        birds: updatedArray
      }
    })
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
        <Route path='/animal' element={<Animals
          data={this.state.animals}
          removeHandler={this.removeHandler}
          likesHandler={this.likesHandler}
          searchHandler={this.searchHandler}
          searchInput={this.state.searchInput} />}></Route>
        <Route path='/bird' element={<Bird
          data={this.state.birds}
          removeHandler={this.removeHandlerBird}
          likesHandler={this.likesHandlerBird}
          searchHandler={this.searchHandler}
          searchInput={this.state.searchInput} />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    );
  }
}

export default App;