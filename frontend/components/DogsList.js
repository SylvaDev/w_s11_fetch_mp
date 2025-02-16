import React from 'react'

export default function DogsList({ dogs, getDogs, setCurrentDog }) {
const editDog = id => {
  console.log('editing dog...', id)
}
const deleteDog = id => {
  console.log('deleting dog...', id)
}

  return (
    <div>
      <h2>Dogs Shelter</h2>
      <ul>
        {
          dogs.map(dog => (
            <li key={dog.id}>
            {dog.name}, {dog.breed}, {dog.adopted ? '' : 'NOT '}adopted
            <div>
              <button onClick={() => editDog(dog.id)}>Edit</button>
              <button onClick={() => deleteDog(dog.id)}>Delete</button>
            </div>
          </li>
          ))
        }
      </ul>
    </div>
  )
}
