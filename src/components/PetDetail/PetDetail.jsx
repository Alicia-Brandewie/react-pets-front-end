const PetDetail = (props) => {
  // ecause passing something into this, use  'props' 
  if (!props.selected) { // AKA if props.selected=null than...
    return (
      <div>
        <h1>NO DETAILS</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{props.selected.name}</h1>
      <h2>Breed: {props.selected.breed}</h2>
      <h2>
        Age: {props.selected.age} years {props.selected.age > 1 ? 's' : ''} old
      </h2>
        <div>
          <button onClick={() => props.handleFormView(props.selected)}>
            Edit Pet
          </button>
          <button onClick={() => props.handleDeletePet(props.seleted._id)}>
            Delete Pet
          </button>
        </div>
      </div>
      );
};

      export default PetDetail;