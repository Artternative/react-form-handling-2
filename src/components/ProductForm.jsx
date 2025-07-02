import {useState} from "react";


 
function ProductForm() {

  const  [productName,setproductName] = useState("")
  const  [URL,setURL] = useState("")
  const  [price,setPrice] = useState("")
  const  [description,setdescription] = useState("")

  const handlerSubmit = (event) => {
        event.preventDefault();
        const data = {
          name:productName,
          price:price,
          image:URL,
          description:description
        }
        alert(JSON.stringify(data));


  };
  return (
    <>
    <form className="post-form" onSubmit={handlerSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={productName}
            onChange={(event) => {setproductName(event.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            value={URL}
            placeholder="Enter image url here"
            onChange={(event) => {setURL(event.target.value)}}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            value={price}
            placeholder="Enter price here"
            onChange={(event) => {setPrice(event.target.value)}}
            
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            value={description}
            placeholder="Enter description here"
            onChange={(event) => {setdescription(event.target.value)}}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
    </>
  );
}

export default ProductForm;
