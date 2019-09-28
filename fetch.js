const fs = require('fs');
const glob = require('glob');
const debug = require('debug')('fetch');

// setup some paths
const fontFileName = "OnKawara-Regular";
const fontFileExtension = ".otf";

const fontSrcAbsolute = `/Users/vincentb/Documents/fonts/On Kawara/www/${fontFileName}`;

const fontTarget = "./public/fonts";

/**
 * Main function of module
 */
async function main() {
  debug('About to fetch the latest font file from');
  debug(fontSrcAbsolute);

  // glob for existing font files in ./public/fonts
  const existingFonts = await new Promise((resolve, reject) => {
    glob(`${fontTarget}/${fontFileName}-*`, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  }).catch(reason => console.log(reason));

  // query for last version
  const version = existingFonts.reduce((acc, element) => {
    const version = element.split('-').pop().split('.').slice(0,3).join('.');
    return version > acc ? version : acc;
  }, '');

  // define new version
  const newVersion = version.split('.').map((element, index, array) => {
    if (index < (array.length - 1)) {
      return element;
    }
    return +element + 1;
  }).join('.');

  // log info
  debug(`Exiting latest version: ${version}`);
  debug(`Supposed new version: ${newVersion}`);

  // define paths
  const srcPath = `${fontSrcAbsolute}${fontFileExtension}`;
  const targetPath = `${fontTarget}/${fontFileName}-${newVersion}${fontFileExtension}`;
  const baseName = `${fontTarget}/${fontFileName}${fontFileExtension}`;

  // copy font file to target with version number
  fs.copyFile(srcPath, targetPath, (error) => {
    if (error) {
      throw error;
    } else {
      debug(`Copied latest font file to ${fontTarget}`);

      fs.copyFile(targetPath, baseName, error => {
        if (error) {
          throw error;
        } else {
          debug(`Duplicated ${targetPath} to ${baseName}, express.static cannot serve symlinks...(?)`);

          debug('Done');

          // store the new version in a file to be used
          // by the webapp to serve the latest version
          fs.writeFileSync('./font-version', newVersion);
        }
      });
    }
  });
}

// call main function
main();
