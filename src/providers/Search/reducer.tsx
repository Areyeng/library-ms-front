
import { SearchActionEnum } from "./action";
import {  ISearchState, ISearchStateContext } from "./context";


const searchReducer = (state:ISearchState, action: ReduxActions.Action<ISearchStateContext>): ISearchState => {
    const {type,payload} = action;
    switch (type) {
    case SearchActionEnum.searchBookByTitle:
          return{
            ...state,...payload
          }
    case SearchActionEnum.searchBookByAuthor:
          return{
            ...state,...payload
          }
    case SearchActionEnum.searchBookByISBN:
          return{
            ...state,...payload
          }     
      default:
        return state;
    }
  };

export default searchReducer;