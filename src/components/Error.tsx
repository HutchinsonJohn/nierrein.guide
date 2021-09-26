import React from "react";

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    error: null,
  };

  constructor(props) {
    super(props);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      console.log(this.state.error);
      // You can render any custom fallback UI
      return (
        <div className="flex flex-col items-center justify-center mt-12">
          <p>Something went wrong.</p>
        </div>
      );
    }

    return this.props.children;
  }
}
