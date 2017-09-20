const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const App = require('../dist/assets/bundle');
const template = require('./template');

const server = express();

server.use('/assets', express.static('assets'));

server
    .get('/', (req, res) => {
            const isMobile = true;
            const initialState = { isMobile };
            const appString = renderToString( < App {...initialState }
                />);
                res.send(template({
                    body: appString,
                    title: 'Hello World from the server',
                    initialState: JSON.stringify(initialState)
                }));
            });

        server.listen(8080); console.log('listening');