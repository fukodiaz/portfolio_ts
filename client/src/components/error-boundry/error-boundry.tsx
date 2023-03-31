import React, {Component, ReactNode} from 'react';
import ErrorIndicator from '../error-indicator';
import {Props, State} from './types';

class ErrorBoundry extends Component<Props, State> {
	state = {
		error: false
	};

	public static getDerivedStateFromError(_: Error): State {
		return { error: true };
	}

	render() {
		const {error} = this.state;

		if (error) {
			return <ErrorIndicator />;
		}

		return this.props.children;
	}
}

export default ErrorBoundry;