import React from 'react';

const html = (props) => {
    <html lang='en'>
        <head>
            <script src="http://localhost:8097"></script>
            <noscript>
                <div class="flex-center">
                    <b>This page will not load correctly with JavaScript disabled at the moment.
          Please enable JavaScript to view this page.</b>
                </div>
            </noscript>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.css" />
            <link href="/index.scss" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fugaz+One" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" />
            <title>Talent</title>
        </head>
        <body>
            <div
                id="root"
                dangerouslySetInnerHTML={{ __html: props.html }}
            />
            <script dangerouslySetInnerHTML={{
                __html:
                    'window.__SERIALIZED_STATE__ = JSON.stringify(${props.serverState})'
            }}
            />
            <script type="application/javascript" src="/frontBundle.js" />
        </body>
    </html>
    };

export default html;