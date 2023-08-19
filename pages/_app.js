import { Provider } from "react-redux";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import "../styles/global.css";
import ReduxStore from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { GetProfile, SetAuthProfile } from "../redux/reducers/profile";

// Check If User Already Logged In
const InitialAppState = () => {
  const dispatch = useDispatch();
  const AuthProfile = useSelector(GetProfile);

  useEffect(() => {
    if (!!!AuthProfile.profile.token) {
      const token = getCookie("token");
      const user = JSON.parse(getCookie("user") || null);
      if (token && user) {
        dispatch(SetAuthProfile({ user, token }));
      }
    }
  }, []);
};

export default ({ Component, pageProps }) => {
  return (
    <Provider store={ReduxStore}>
      <InitialAppState />
      <Component {...pageProps} />
    </Provider>
  );
};
