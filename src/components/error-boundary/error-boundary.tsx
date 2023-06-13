/* eslint-disable no-console */
import { Component, ReactNode } from 'react';
import { PageErrorBoundary } from './page-error-boundary';

type ErrorBoundaryPropsType = {
  children: ReactNode;
};
type ErrorBoundaryStateType = {
  hasError: boolean;
  errMsg: string;
};

export class ErrorBoundary extends Component<ErrorBoundaryPropsType, ErrorBoundaryStateType> {
  constructor(props: ErrorBoundaryPropsType) {
    super(props);
    this.state = { hasError: false, errMsg: '' };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errMsg: error.message };
  }

  componentDidCatch() {
    // console.clear();
  }

  render() {
    const { hasError, errMsg } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <PageErrorBoundary errMsg={errMsg} />;
    }

    return children;
  }
}
