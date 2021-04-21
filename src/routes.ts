import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsController } from './controllers/SettingsController';
import { UsersController } from './controllers/UsersController';
import { SettingsRepository } from './repositories/SettingsRepository';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();

routes.post('/settings', settingsController.create);
routes.post('/users', usersController.create);

export { routes };