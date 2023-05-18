import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ApolloProvider } from '@apollo/client';
import { client } from '@/apollo/client';
import i18n from './i18n/i18n';
import { ErrorBoundary } from './components/error-boundary/error-boundary';
import { App } from './App';
import { setupStore } from '@/store';
import '@/server/firebase';
import './index.scss';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <I18nextProvider i18n={i18n}>
            <App />
          </I18nextProvider>
        </ApolloProvider>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
