import { Provider } from 'react-redux';

import { ConfigProvider } from 'antd';
import { persistor, store } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';

function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConfigProvider


          theme={{
            token: {
              colorPrimary: '#1772e0',
              // colorTextLightSolid: '#000000',

              fontSize: 16,
            },
            components: {
              Button: {
                controlHeight: 42,

                paddingInline: 24,
              },
              Input: {
                controlHeight: 42,

                paddingInline: 24,
              },

              InputNumber: {
                controlHeight: 42,
              },
              Form: {
                marginLG: 16,
                fontFamily: 'Poppins, sans-serif',
              },

              Radio: {},
              Table: {
                headerBg: '#1772e0',
                headerColor: '#fff',
              },
              DatePicker: {
                controlHeight: 42,
              },
              Select: {
                controlHeight: 42,
              },
              Divider: {
                margin: -16,
                padding: -110,
              },
              Tooltip: {
                colorTextLightSolid: '#000000',
                colorBgContainer: '#fff',
              },
            },
          }}
        >

          {children}
        </ConfigProvider>
      </PersistGate>
    </Provider>
  );
}

export default ClientProvider;