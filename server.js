import app from './src/app.js';

const port = process.env.PORT || 3000; // 3000 is the default port

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
}); 
