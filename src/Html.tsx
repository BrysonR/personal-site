import * as React from 'react';

interface HtmlProps extends React.Props<any> {
    children: React.ReactChildren,
    initialData: {}
}

export class Html extends React.Component<HtmlProps, any> {
    constructor(props: HtmlProps) {
        super(props);
    }

    render() {
        return (
            <html>
                <head>
                    <title>Bryson's Personal Site</title>
                </head>
                <body>
                    <div id="app">{this.props.children}</div>
                    <script id="initial-data" type="text/plain" data-json={this.props.initialData}></script>
                    <script src="/public/bundle.js"></script>
                </body>
            </html>
        )
    }
}