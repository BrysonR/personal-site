import * as React from 'react';

interface AppProps extends React.Props<any> {
    owner: string
}

export class App extends React.Component<AppProps, {}> {
    constructor(props: AppProps) {
        super(props);
    }
    
    render () {
        return (
            <div>Thanks for viewng {this.props.owner}'s Personal Site</div>
        );
    }
}