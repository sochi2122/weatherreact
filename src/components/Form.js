// import the useState hook from react
import { useState } from "react"
// always make sure to declare the props parameter so you can use props in your Component
  // state to hold the data of our form
  
  const Form = (props) => {
  
  const [formState, setFormState] = useState({
    searchTerm: '',
  });

  const handleChange = (event) => {
    setFormState({ searchTerm: event.target.value })
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    props.getWeather(formState.searchTerm)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={formState.searchTerm} onChange={handleChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
