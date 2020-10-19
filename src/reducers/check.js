const initialState = {
  items: [
    {
        id:1,
      label: "Все",
      checked: false,
    },
    {
        id:2,
      label: "Без пересадок",
      checked: false,
    },
    {
        id:3,
      label: "1 пересадка",
      checked: false,
    },
    {
        id:4,
      label: "2 пересадки",
      checked: false,
    },
    {
        id:5,
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
        return {items: items,selectAll: false}
      }else {
        let items = [...state.items];
        items = items.map((item) => {
          return {
            ...item,
            checked: true,
          };
        });
        return {items: items,selectAll: true}
      }

    default:
      return state;
  }
}
