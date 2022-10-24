import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
    models: {
        transactions: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freelance de Website',
                    type: 'deposit',
                    category: 'Dev',
                    amount: 6000,
                    createdAt: new Date('2022-11-04T00:41:19-03:00')
                },
                {
                    id: 2,
                    title: 'Aluguel',
                    type: 'withdraw',
                    category: 'Casa',
                    amount: 1100,
                    createdAt: new Date('2022-11-02T00:41:19-03:00')
                }
            ]
        })
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return this.schema.all('transactions');
        });

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)

            return schema.create('transactions', data);
        })
    }
})

createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <StrictMode>
        <App />
    </StrictMode>
);