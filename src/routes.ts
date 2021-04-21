import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from './repositories/SettingsRepository';

const routes = Router();

routes.post('/settings', async (req, res) => {
    const { chat, username } = req.body;
    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
        chat,
        username
    });

    await settingsRepository.save(settings);

    return res.json(settings);
});

export { routes };