import express, { Router } from 'express';
const router = Router();

router.get('/', async(request: express.Request, response: express.Response) => {
    const data = {
        type: 'test',
        status: 'ok',
        description: 'Checking if everything is working well'
    };
    response.json(data);
})

export default router;
