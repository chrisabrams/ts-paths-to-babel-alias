# ts-paths-to-babel-alias

Convert TypeScript paths to babel alias paths.

## Install

    yarn add ts-paths-to-babel-alias --dev

    or

    npm install ts-paths-to-babel-alias -D

## Usage

In the `babel.config.js` config add the module to the alias property:

    const resolveTSPathsToBabelAlias = require('ts-paths-to-babel-alias')

    /* ...babel config */

    {
      alias: {
        ...resolveTSPathsToBabelAlias({
          configFile
        }),
      }
    }

### Options

#### Required

- `configFile`: The path to the `tsconfig.json` file used for the project.

#### Optional

- `context`: Provide a context for the TypeScript file paths. This is useful if your `tsconfig.json` and `babel.config.js` are not in the same location.
