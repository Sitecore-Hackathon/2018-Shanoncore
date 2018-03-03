# Kronos
> @verndale/kronos - Front end build system.

[![npm][npm-image]]()

![Verndale | verndale.com](src/images/logo-verndale.png "Verndale")

## Getting Started

### Requirements
Download/install these tools/packages in order to run the toolkit locally.
* [Node][node-url] - `>= 7.7.0 <=9.x.x`
* [cross-env][cross-env-url] - `5.1.1`

### Install requirements
#### Install Node JS
Installing Node will also install the Node Package Manager ([npm][npm-url])
* Click [here][node-url] to grab the package
* Download the most current node which has the latest features
* Follow on screen instructions to complete installation

To make sure Node and npm installed properly, launch your terminal or command line and type:
```sh
node --version
```
_You should see a version number such as this: `v8.1.2`_

```sh
npm --version
```
_You should see a version number such as this: `5.5.1`_

#### Install cross-env globally
`cross-env` makes it so you can have a single command without worrying about setting or using the environment variable properly for the platform. Just set it like you would if it's running on a POSIX system, and `cross-env` will take care of setting it properly.
This will be used to set the `NODE_ENV` environment variable cross-platform when running builds.
```sh
# Mac
sudo npm install -g cross-env

# Windows
npm install -g cross-env
```

-----------------------

### Install dependencies
Once you have your requirements installed, navigate to the root of the toolkit in terminal or command line and run:
```sh
npm install
```
This will bring down all `dependencies` and `devDependencies` for the project that are defined in the `package.json` file so you can properly run a build and work on the project.

-----------------------

### Running the application
he build process will run a [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) and serve up the application and assets at [http://localhost:3000](http://localhost:3000). The build will poll for changes in any file and refresh the browser automatically upon saving the file(s).

After npm finishes installing dependencies, run the following at the root of the project:
```sh
npm start
```
Running this command will compile, by default, a `development` build and launch your primary browser automatically. You are now ready to start making changes to the JavaScript, SCSS and HTML.

-----------------------

## Create Production Build
To create a production build of the front end assets, run this command at the root of the project and make sure you are in the `master` branch:
```sh
git checkout master && git rebase develop && npm run build
```
This command will checkout `master` branch, rebase `develop` on top of it and run a production build.
This puts Gulp and Webpack in the production environment and puts all compiled files in the _dist_ folder.

After the build is complete you will need to commit the new distribution files - an example of a distribution build of features would look like this:
```sh
git commit -am "Distribution build

feature/FOO-2143 - Add generic module
feature/FOO-1847 - Add global header module
feature/FOO-3887 - Add global footer module"
```

#### Create a Tag
Every production build should be tagged with release notes. Below is an example on how to release a minor version with the features listed above. **This is assuming that your package.json file version field is set to 0.2.0.**
```sh
npm version minor -m "Release version 0.3.0

feature/FOO-2143 - Add generic module
feature/FOO-1847 - Add global header module
feature/FOO-3887 - Add global footer module"
```
This command will create a new tag called "v0.3.0" and push the tag as well as push to master. You can replace `minor` with `patch` or `major` depending on the release. See [semantic versioning](http://semver.org/) for more information or refer to our [internal documentation](https://confluence.verndale.com/display/~Joe.Fusco/NPM).

-----------------------

## Available Commands
You can run any gulp or npm command as a stand alone task in your terminal or command line.

### Gulp
Command | Description | Depends On
--- | --- | ---
`gulp clean` | Removes all files in the _dev_ folder when running a dev build - or, removes all files in the _dist_ folder when running a production build. |
`gulp clean-css`| Minifies the css after it's been compiled from scss and puts the completed files in the _dist_ folder along with source maps. | `gulp scss-lint`<br> `gulp sass`
`gulp copy` | Copies **src/fonts**, **src/images** in a development build. Copies the **src/fonts** in a production build - copies files to the _dist_ folder. |
`gulp esdoc` | Creates JavaScript documentation and creates a _docs_ folder to hold all files associated. |
`gulp file-include` | Dynamic HTML file includes that get compiled in to the _dev_ folder. |
`gulp imagemin` | Minifies all images found in **src/images** and puts them in the _dist_ folder. | `gulp spritesmith`
`gulp sass` | Compiles SCSS, globs and auto prefixes SCSS files found in **src/scss** and puts files in _dev_ or _dist_ depending on the build you do. |
`gulp scss-lint` | Lints the SCSS files using `sass-lint`.<br><br> This command will notify the user of any warnings or errors.<br> The rules for `sass-lint` can be found in **.sass-lint.yml** in the root of the project. |
`gulp server` | Launches a Webpack dev server using [webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server) and initiates [browser-sync](https://www.npmjs.com/package/browser-sync) and hot module replacement using [webpack-hot-middleware](https://www.npmjs.com/package/webpack-hot-middleware). |
`gulp spritesmith` | Creates a spritesheet and styles from png's found in **src/images/sprites**.<br><br> This task will put the completed image in **src/images** and the stylesheet in **src/scss/core**. |
`gulp template` | Automatically creates an index.html file from the files found in **src/pages**. |
`gulp watch` | Palls for changes for HTML files and SCSS files and runs certain commands on save. |

### NPM
Command | Description
--- | ---
`npm start` | Starts a development build of the project and launches your browser on [localhost:3000](localhost:3000).
`npm run build` | Runs eslint and a production build - puts compiled files in the _dist_ folder.
`npm run js-lint` | Runs `eslint` and auto fixes issues for files found in **src/js**.
`npm run check-deps` | Runs `check-dependencies` and auto installs any missing packages.
`npm version` | Adds any unstaged files before upping the version and tagging the build - you will need to add `patch`, `minor` or `major` to this command.
`npm postversion` | **NOTE: Not to be used directly, this command runs after the project has been versioned** - Commits and pushes the new tag and to `master` branch.

## Directory Structure
```
|__dev
|__dist
|__docs
|__gulp
    |__tasks
|__src
    |__fonts
    |__html
    |__images
    |__js
    |__scss
    |__index.html
|__webpack
|__config.js
```

Folder/File | Description
--- | ---
dev | Stores files when running the development server
dist | Stores production files
docs | Installation and JavaScript documentation
gulp/tasks | Individual Gulp tasks
src/* | Holds all front end assets
webpack | Holds individual webpack configuration objects
config.js | Path configuration for Gulp and Webapck


[node-url]: https://nodejs.org/en/
[npm-url]: https://www.npmjs.com/
[cross-env-url]: https://www.npmjs.com/package/cross-env
[verndale-logo]: src/images/logo-verndale.png?raw=true "Verndale"
[npm-image]: https://img.shields.io/npm/v/npm.svg
