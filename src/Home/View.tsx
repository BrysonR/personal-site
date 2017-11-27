import * as React from 'react';
import { BRLogo } from '../BRLogo';

export default class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    
    render () {
        const { owner } = this.props.routeData;

        return (
            // <BRLogo />
            <div>This IS {owner}' site</div>
        );
    }
}