import { Application } from 'express';
import errorSdkRouter from './err-sdk';
import routerConfigRouter from './router-config';
import fileRouter from './file';

export default ({ app, jwtKey }: { app: Application; jwtKey: string }) => {
	errorSdkRouter({ app });

	routerConfigRouter({ app, jwtKey });

	fileRouter({ app });
};
