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
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" />
                    <link rel="manifest" href="/public/manifest.json" />
                    <link rel="mask-icon" href="/public/safari-pinned-tab.svg" color="#5bbad5" />
                    <link rel="shortcut icon" href="/public/favicon.ico" />
                    <meta name="msapplication-config" content="/public/browserconfig.xml" />
                    <meta name="theme-color" content="#ffffff" />
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