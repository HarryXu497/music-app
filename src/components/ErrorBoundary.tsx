import React, { ErrorInfo } from "react"

interface ErrorBoundaryProps {
	children?: React.ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	errorMessage?: string;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
	
	state: ErrorBoundaryState = { hasError: false };

	constructor(props: ErrorBoundaryProps) {
	  super(props);
  
	  // Define a state variable to track whether is an error or not
	}
	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
	  // Update state so the next render will show the fallback UI
	  return { hasError: true, errorMessage: error.message }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
	  // You can use your own error logging service here
	  console.log({ error, errorInfo })
	}

	render() {
	  // Check if the error is thrown
	  if (this.state.hasError) {
		// You can render any custom fallback UI
		return (
		  <div>
			<h2>Oops, there is an error!</h2>
			<h3>{ this.state.errorMessage || "Try again later" }</h3>
			<button
			  type="button"
			  onClick={() => this.setState({ hasError: false })}
			>
			  Try again?
			</button>
		  </div>
		)
	  }
  
	  // Return children components in case of no error

	  return this.props.children;
	}
  }
  
  export default ErrorBoundary