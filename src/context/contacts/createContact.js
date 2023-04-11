import { ADD } from "../../constants/actiontypes"
import { API } from "../../constants/api"
import axiosInstance from "../../helpers/axiosInstance"
import { storage } from "../../helpers/firebase"
import { FIREBASE_IMAGE_REF } from "../../constants/firebase/firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";

export default ({ firstName: first_name, lastName: last_name, phoneNumber: phone_number, countryCode: country_code, contactPicture: contact_picture, isFavorite: is_favorite}) => (dispatch) => {

    const saveToBackend = (url=null) => {

        axiosInstance().post('/contacts/', {first_name,last_name, phone_number,country_code, contact_picture: url, is_favorite  }).then((res) => { 
            dispatch({ type: ADD.SUCCESS,
            payload: res.data})
            console.log('data', res.data) } ).catch((err) => {
                dispatch({
    
                    type: ADD.ERROR,
                    payload: err.response ? err.response.data : API.CONNECTION_ERROR
                })
            })
    }
    dispatch({
        type: ADD.LOADING
    })
    if (contact_picture) {
        storage
          .ref(`${FIREBASE_IMAGE_REF}/${contact_picture.name}`)
          .put(contact_picture)
          .on(
            "state_changed",
            (snapshot) => {},
            async (error) => {},
            async () => {
              const url = await storage
                .ref(FIREBASE_IMAGE_REF)
                .child(contact_picture.name)
                .getDownloadURL();
              saveToBackend(url);
            }
          );
      } else {
        saveToBackend();
      }



}