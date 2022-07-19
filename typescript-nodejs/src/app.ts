import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todos';
import { json } from 'body-parser';

const app = express();

app.use(json());

// add routes
app.use('/todos', todoRoutes);

// error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ status: 'failed', message: err.message });
});

// start server
app.listen(3000);
