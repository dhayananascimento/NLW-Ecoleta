import express from 'express';

const app = express();

app.get('/users',(request,response) => {
    console.log("Listagem de usuarios");
    response.json([
        "Dhayana",
        "Julia",
        "Ana",
        "Maria",
        "Lucia"
    ])
});

app.listen(3333);