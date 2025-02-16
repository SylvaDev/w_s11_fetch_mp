import React from 'react'

export default function DogsList({ dogs, getDogs, setCurrentDog }) {
  return (
    <div>
      <h2>Dogs Shelter</h2>
      <ul>
        {
          dogs.map(dog => (
            <li key={dog.id}>
            {dog.name}, {dog.breed}, {dog.adopted ? '' : 'NOT '}adopted
            <div>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </li>
          ))
        }
      </ul>
    </div>
  )
}
