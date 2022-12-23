# TS Starter Project

##### Description

This is a starter project to be used with general applications programmed using Typescript. Starter project includes Typescript setup as well as initial test setup. This starter is intended to use Docker for full every part of development process with the exception of `git`.

## Getting started

#### Prerequisites

- Docker (v19.03.0+)
- git

#### Initialize

- Run `./dev install` (this will install development dependencies)

#### Usage

Development is accomplished using development commands.

```bash
./dev <command>

example:
./dev start
```

- install - Reinstall npm dependencies
- start - Run test watcher (main development mode)
- shell - Run interactive shell inside docker container
- node - Run interactive Node process with App instance instantiated
- npm - Run npm command in the context of the application (example: `./dev npm run test:coverage`)
