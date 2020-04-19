import { ConsoleBasicAuthPrompt } from '../index';

describe('ConsoleBasicAuthPrompt', () => {
  const auth: ConsoleBasicAuthPrompt = new ConsoleBasicAuthPrompt('Connexion');

  test('type must be basicauth', () => {
    expect(auth.getType()).toBe('basicauth');
  });

  test('name must be answer', () => {
    expect(auth.getName()).toBe('basicauth');
  });

  test('message must be Connexion', () => {
    expect(auth.getMessage()).toBe('Connexion');
  });

  test('username must be empty', () => {
    expect(auth.getUsername()).toBe('');
  });

  test('password must be empty', () => {
    expect(auth.getPassword()).toBe('');
  });

  test('showPassword must be false', () => {
    expect(auth.isShowPassword()).toBeFalsy();
  });
});
