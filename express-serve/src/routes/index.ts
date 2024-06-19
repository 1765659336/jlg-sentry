import { Application } from 'express';
import errorSdkRouter from './err-sdk';
import userRouter from './user';
import routerConfigRouter from './router-config';
import fileRouter from './file';
import { T_RedisClient } from '../global';

export default ({ app, jwtKey, redisClient }: { app: Application; jwtKey: string; redisClient: T_RedisClient }) => {

	errorSdkRouter({ app });

	userRouter({ app, jwtKey, redisClient });

	routerConfigRouter({ app, jwtKey });

	fileRouter({ app });
};