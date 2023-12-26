import prompts from 'prompts';
import { botSay } from './say';

export const askConsoleBot = async (text: string) => {
  const response = await prompts({
    type: 'text',
    name: 'meaning',
    message: text
  });

  return response.meaning
};
