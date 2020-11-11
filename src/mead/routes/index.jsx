import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import App from './appRender.jsx';
import routes from './routes.jsx';
import HTML from './HTML.jsx';

export default function renderRoute(req, res) {
    const branch = matchRoutes(routes, req.url);
    const promises = [];

    branch.forEach(({ route, match }) => {
        if (route.loadData) {
            promises.push(route.loadData(match));
        }
    });

    Promise.allSettled(promises).then(data => {
        const context = data.reduce((context, data) => Object.assign(context, data), {});

        const router = <StaticRouter location={req.url} context={context}><App /></StaticRouter>;

        const app = renderToString(router);

        const html = renderToString(<HTML html={app} />);

        return res.send('<!DOCTYPE html>' + html );
    });
}