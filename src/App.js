import React from 'react';
import WeightProvider from './contextApi/WeightContext'
// import ReactNotifications from 'react-notifications-component';
import Layout from './layout/layout';





const App = () => {
     return (
          <WeightProvider>
               <div>
                    <Layout>
                    </Layout>
               </div>
          </WeightProvider>

     );

}


export default App;

