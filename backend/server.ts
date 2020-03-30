import * as path from 'path';
import * as express from 'express';
import { port } from './config';
import app from './app';

app.use(express.static( path.join(__dirname,'./../client') ));

app.get('/api', (req,res) => {
    res.json({ ok:true, msg: 'Hello world' })
})

app.use('/*', express.static( path.join(__dirname,'./../client') ));

app.listen( port, () => console.log(`Listening on port ${port}`) );