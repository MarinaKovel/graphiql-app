import { Component, ErrorInfo, ReactNode } from 'react';
import { PageErrorBoundary } from './page-error-boundary';

type ErrorBoundaryPropsType = {
  children: ReactNode;
};
type ErrorBoundaryStateType = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryPropsType, ErrorBoundaryStateType> {
  constructor(props: ErrorBoundaryPropsType) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <PageErrorBoundary />;
    }

    return children;
  }
}
