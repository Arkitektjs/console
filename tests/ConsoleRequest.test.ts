import { ConsoleRequest } from '../src/ConsoleRequest';

describe('ConsoleRequest', () => {
  const request = new ConsoleRequest();

  test('set help command if nothing given', () => {
    request.parse([]);
    expect(request.getCommand()).toBe('help');
    expect(request.hasOption('-h')).toBeTruthy();
    expect(request.hasOption('--help')).toBeTruthy();
  });

  test('set help command if -h or --help option given', () => {
    request.parse(['-h']);
    expect(request.getCommand()).toBe('help');
    expect(request.hasOption('-h')).toBeTruthy();
    expect(request.hasOption('--help')).toBeTruthy();

    request.parse(['--help']);
    expect(request.getCommand()).toBe('help');
    expect(request.hasOption('-h')).toBeTruthy();
    expect(request.hasOption('--help')).toBeTruthy();
  });

  test('set version command if -h/--help and -v/--version options are given', () => {
    request.parse(['-h', '-v']);
    expect(request.getCommand()).toBe('version');
    expect(request.hasOption('-v')).toBeTruthy();
    expect(request.hasOption('--version')).toBeTruthy();
    expect(request.hasOption('-h')).toBeFalsy();
    expect(request.hasOption('--help')).toBeFalsy();
  });

  test('set version command if only -v or --version option given', () => {
    request.parse(['-v']);
    expect(request.getCommand()).toBe('version');
    expect(request.hasOption('-v')).toBeTruthy();
    expect(request.hasOption('--version')).toBeTruthy();

    request.parse(['--version']);
    expect(request.getCommand()).toBe('version');
    expect(request.hasOption('-v')).toBeTruthy();
    expect(request.hasOption('--version')).toBeTruthy();
  });

  test('set list command if only --list option given', () => {
    request.parse(['--list']);
    expect(request.getCommand()).toBe('list');
    expect(request.hasOption('--list')).toBeTruthy();
  });

  test('command must be exist without options', () => {
    request.parse(['command', 'arg']);
    expect(request.getCommand()).toBe('command');
    expect(request.hasOptions()).toBeFalsy();
  });

  test('command must be exist with arguments', () => {
    request.parse(['command', 'arg1', 'arg2']);
    expect(request.getCommand()).toBe('command');
    expect(request.getArguments()).toStrictEqual(['arg1', 'arg2']);
  });

  test('command must be exist with arguments and options', () => {
    request.parse(['command', 'arg1', '-o', 'opt1', 'arg2', '-o', 'opt2', '-b', '-b', '1']);
    expect(request.getCommand()).toBe('command');
    expect(request.getArguments()).toStrictEqual(['arg1', 'arg2']);
    expect(request.hasOptions()).toBeTruthy();
    expect(request.getOption('-o')).toStrictEqual(['opt1', 'opt2']);
    expect(request.getOption('-b')).toStrictEqual([true, '1']);
  });

  test('command and sub-commands must be exist', () => {
    request.parse(['command:sub1:sub2']);
    expect(request.getCommand()).toBe('command');
    expect(request.hasSubCommands()).toBeTruthy();
    expect(request.getSubCommands()).toStrictEqual(['sub1', 'sub2']);
  });
});
