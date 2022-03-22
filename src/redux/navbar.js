const initState = {
    data: [
      {
        id: 1,
        parent: 0,
        name: "Home",
      },
      {
        id: 2,
        parent: 0,
        name: "DropDown 1",
      },
      {
        id: 3,
        parent: 0,
        name: "DropDown 2",
      },
    ],
  };
  
  // eslint-disable-next-line
  export default (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD":
        const allData = [...state.data];
        allData.push(payload);
        return {
          ...state,
          data: allData,
        };
      default: {
        return { ...state };
      }
    }
  };
  