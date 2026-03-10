import { useEffect } from "react";
import { Route, Routes } from "react-router";
import AppHeader from "../app-header/app-header";
import Catalog from "../catalog/catalog";
import { getTariffs } from "../../services/actions/tariffs";
import {
  useDispatch,
  useSelector,
} from "../../utils/additional-storage-typing";

function App() {
  const dispatch = useDispatch();
  const { tariffs, getTariffsRequest, getTariffsRequestError } = useSelector(
    (store: any) => store.tariffs,
  );
  useEffect(() => {
    dispatch(getTariffs());
  }, []);

  return (
    <>
      {getTariffsRequest && (
        <div style={{ fontSize: "50px" }}>Загрузка данных...</div>
      )}
      {!getTariffsRequest && getTariffsRequestError && (
        <div style={{ fontSize: "50px" }}>Ошибка получения данных!</div>
      )}
      {!getTariffsRequest && !getTariffsRequestError && tariffs && (
        <>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Catalog />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
