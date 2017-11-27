import * as React from 'react';
import { BRLogo } from './BRLogo.tsx';


interface AppProps extends React.Props<any> {
    owner: string
}

export class App extends React.Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
    }
    
    render () {
        return (
            <BRLogo />
        );
    }
}