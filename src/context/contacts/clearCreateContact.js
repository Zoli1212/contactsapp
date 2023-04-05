import { ADD } from "../../constants/actiontypes";


export default () => (dispatch) => {
  dispatch({
    type: ADD.CLEAR,
  });
};