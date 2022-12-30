/**
 * @Author      : manho <manho30@outlook.my>
 * @Date        : 18/12/2022 14:12
 * @File        : server.js
 * @IDE         : WebStorm
 */

const express = require('express')
const { addCorsHeader } = require('./helper/cors')

const startText = (port) => { return `
==================================================
|                                                |
|   🚀 Server running at http://localhost:${port}/  |
|   🛑 Press Ctrl + C to stop                    |
|   🔥 Created with love by manho                |
|                                                |
==================================================
`};

/**
 * @Description : Create express app
 * @param port
 * @returns {express}
 */
function serveBackendAPI (port=3000){
    if (!port || port <1023) throw new Error('Invalid port number');
    const app = express();
    app.use(express.json());

    // cors preflight
    app.options('*', (req, res) => {

        res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.status(200).send();
    });

    app.get('/', (req, res) => {
        addCorsHeader(res);
        res.status(200).json({
            'ok': true,
            'status': 200,
            'result': []
        })
    })

    app.get('/event', (req, res) => {
        addCorsHeader(res);
        res.status(200).json({
            'ok': true,
            'status': 200,
            'result': [
                {'date': '2021-12-18', 'title': 'test1', 'description': 'test1'},
                {'date': '2021-12-25', 'title': 'test2', 'description': 'test2'},
                {'date': '2021-12-31', 'title': 'test3', 'description': 'test3'},
            ]
        })
    })

    app.get('/auth/login', (req, res) => {
        res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.status(200).json({
            'ok': true,
            'status': 200,
            'result': {
            }
        })
    })

    app.listen(port, () => {
        // clear console
        console.clear();
        console.log(startText(port));
    });
}

module.exports = serveBackendAPI;