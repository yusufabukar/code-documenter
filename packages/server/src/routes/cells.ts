import path from 'path';
import { promises as fs } from 'fs';
import express from 'express';
import { defaultCells } from './defaultCells';

interface Cell {
	id: string;
	type: 'code' | 'text';
	content: string;
};

export const createCellsRouter = (filename: string, directory: string) => {
	const cellsRouter = express.Router();

	cellsRouter.use(express.json());

	const fullPath = path.join(directory, filename);
	
	cellsRouter.get('/cells', async (request, response) => {
		try {
			const file = await fs.readFile(fullPath, {encoding: 'utf-8'});

			response.status(200).send(JSON.parse(file));
		} catch (error: any) {
			if (error.code === 'ENOENT') {
				await fs.writeFile(fullPath, JSON.stringify(defaultCells), 'utf-8');
				const defaultFile = await fs.readFile(fullPath, {encoding: 'utf-8'});

				response.status(200).send(JSON.parse(defaultFile));
			} else {
				throw error;
			};
		};
	});
	
	cellsRouter.post('/cells', async (request, response) => {
		const { cells }: {cells: Cell[]} = request.body;

		await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');

		response.status(200).end();
	});

	return cellsRouter;
};