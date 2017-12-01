import * as React from 'react';

interface HtmlProps extends React.Props<any> {
    initialData: Object
}

export class Html extends React.Component<HtmlProps, any> {
    constructor (props: HtmlProps) {
        super(props);
    }

    render() {
        return (
            <html>
                <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
                </head>
                <body>
                    <div id="app">
                        {this.props.children}
                    </div>
                    <script id="initial-data" type="text/plain" data-json={JSON.stringify(this.props.initialData)}></script>
                    <script src="/public/bundle.js"></script>
                </body>
            </html>
        )
    }
}