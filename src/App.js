import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faKey,
  faHome,
  faPlusCircle,
  faTrash,
  faEdit,
  faUser,
  faAddressCard,
  faTimesCircle,
  faServer,
  faSpinner,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import WeightProvider from "./contextApi/WeightContext";
import Layout from "./layout/layout";

library.add(
  faEnvelope,
  faKey,
  faHome,
  faPlusCircle,
  faTrash,
  faEdit,
  faUser,
  faAddressCard,
  faTimesCircle,
  faServer,
  faSpinner,
  faInfoCircle
);

const App = () => {
  return (
    <WeightProvider>
      <div>
        <Layout></Layout>
      </div>
    </WeightProvider>
  );
};

export default App;
