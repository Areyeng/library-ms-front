
import { BookActionEnum } from "./action";
import { IBookActionContext, IBookStateContext } from "./context";


const bookReducer = (state:IBookStateContext, action: ReduxActions.Action<IBookStateContext>): IBookStateContext => {
    const {type,payload} = action;
    switch (type) {
    case BookActionEnum.updateBook:
          return{
            ...state,...payload
          }

    case BookActionEnum.addBook:
          return{
            ...state,...payload
          }
      default:
        return state;
    }
  };

export default bookReducer;