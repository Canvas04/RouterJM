const initialState = {
  items: [
    {
      id: 1,
      label: "Все",
      checked: false,
    },
    {
      id: 2,
      label: "Без пересадок",
      checked: false,
    },
    {
      id: 3,
      label: "1 пересадка",
      checked: false,
    },
    {
      id: 4,
      label: "2 пересадки",
      checked: false,
    },
    {
      id: 5,
      label: "3 пересадки",
      checked: false,
    },
  ],
  selectAll: false,
};
export default function check(state = initialState, action) {
  switch (action.type) {
    case "PRESS_ALL":
      if (state.selectAll) {
        let items = [...state.items];
        items = items.map((item) => {
          return {
            ...item,
            checked: false,
          };
        });
        return { items: items, selectAll: false };
      } else {
        let items = [...state.items];
        items = items.map((item) => {
          return {
            ...item,
            checked: true,
          };
        });
        return { items: items, selectAll: true };
      }

    case "PRESS_ONE":
      
        let items = [...state.items];
        const needId = action.id;
        console.log(needId);
        console.log(state);
        items = items.map((el) => {
          if (el.id === 1) {
            el.checked = false;
          }
          if(el.id === needId) {
            el.checked = !el.checked
          }
          return el;
        });
         return { items: items , selectAll: false}
      
        
      
    default:
      return state;
  }
}
