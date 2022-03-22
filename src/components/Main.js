import Navbar from "./Navbar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const initState = {
  name: "",
  category: "select",
};

const Item = ({ name, childs, id }) => {
  return childs && childs.length > 0 ? (
    <>
      <option value={id}>{name}</option>
      {childs.map((c, i) => (
        <Item index={c.id} {...c} key={i}>
          {c.name}
        </Item>
      ))}
    </>
  ) : (
    <option value={id}>{name}</option>
  );
};

function Main() {
  const [state, setState] = useState(initState);

  const { data } = useSelector((state) => state.navbar);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (state.category !== "select") {
      dispatch({
        type: "ADD",
        payload: {
          id: data.length + 1,
          parent: parseInt(state.category),
          name: state.name,
        },
      });
      setState(initState);
    } else {
      alert("Category or name are requried");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto flex items-center justify-center">
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            value={state.name}
            placeholder="Enter category name"
            className="border rounded-md px-4 py-3 w-56"
            onChange={handleChange}
            required
          />
          <select
            name="category"
            className="border rounded-md px-4 py-3 w-56 mt-6"
            value={state.category}
            onChange={handleChange}
            required
          >
            <option value="select">Select Parent category</option>
            {data &&
              data.map((item, index) => {
                return <Item key={index} index={index} {...item} />;
              })}
          </select>
          <button
            type="submit"
            className="px-4 py-3 bg-purple-700 w-56 rounded-md text-white mt-6"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Main;
