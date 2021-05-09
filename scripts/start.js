import rimraf from 'rimraf';
import paths from '../config/paths';

rimraf.sync(paths.clientBuild);
rimraf.sync(paths.serverBuild);

require('./start.ssr');