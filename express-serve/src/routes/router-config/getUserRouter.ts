import { Application, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default ({ app, jwtKey }: { app: Application; jwtKey: string }) => {
	app.get('/router-config/user/router/query', [], (req: Request, res: Response) => {
		const token = req.headers['authorization'];
		if (token) {
			jwt.verify(token, jwtKey, (err, user: any) => {});
		}
	});
};
