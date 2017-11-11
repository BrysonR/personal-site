import React from 'react';

const Html = (props) => {
    return (
        <html>
            <head>
                <title>Bryson's Personal Site</title>
            </head>
            <body>
                <div id="app">{props.children}</div>
                <script id="initial-data" type="text/plain" data-json={props.initialData}></script>
                <script src="/public/bundle.js"></script>
            </body>
        </html>
    );
}

export default Html;