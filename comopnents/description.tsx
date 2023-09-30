import List from "./list";

type DescriptionParams ={
    description?: string;
  }
  function Description(props:DescriptionParams){
    return (
      <>
    <p>{props.description}</p>
    <List/>
    </>
    )
  }

  export default Description;