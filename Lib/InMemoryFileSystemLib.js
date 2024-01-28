// implement a simple in-memory filesystem library that supports the following functionalities
// createDirectory(name)
// changeDirectory(path)
// addFile(name)
// deleteFile(name)
// deleteDirectory(name)
// getRootDirectory()
// getCurDirectory()
// getCurrDirectoryPath()

const FileSystem = function () {
    this.directory = { 'root': {} };
    this.currentDir = this.directory['root'];
    this.currentDirPath = 'root';

    this.createDirectory = function (name) {
        this.currentDir[name] = {};
    }

    this.changeDirectory = function (path) {
        this.currentDir = this._changeDirectoryHelper(path);
        this.currentDirPath = path;
    }

    // path-subpath-subpath
    this._changeDirectoryHelper = function (path) {
        const paths = path.split('-');
        let current = this.directory;

        for (let key of paths) {
            current = current[key];
        }

        return current;
    }

    this.getCurDirectoryPath = function () {
        return this.currentDirPath;
    }

    this.getCurDirectory = function () {
        return this.currentDir;
    }

    this.addFile = function (fileName) {
        if (!this.currentDir) {
            this.currentDir = {};
        }

        if (this.currentDir.files) {
            this.currentDir.files.push(fileName);
        } else {
            this.currentDir['files'] = [fileName];
        }
        return true;
    }

    this.deleteFile = function (fileName) {
        this.currentDir.files = this.currentDir.files.filter((fName) => fName !== fileName);
        return true;
    }

    this.deleteDirectory = function (name) {
        delete this.currentDir['name'];
    }

    this.getRootDirectory = function () {
        return this.directory;
    }
}

// input
const dir = new FileSystem();
dir.createDirectory('utkarsh');
dir.changeDirectory('root-utkarsh');
dir.addFile('index.html');
dir.addFile('app.js');
dir.changeDirectory('root');
dir.createDirectory('practice');
dir.changeDirectory('root-practice');
dir.addFile('index.html');
dir.addFile('app.js');
dir.createDirectory('build');
dir.changeDirectory('root-practice-build');
dir.addFile('a.png');
dir.addFile('b.jpg');
dir.deleteFile('a.png');
dir.changeDirectory('root');
dir.deleteDirectory('utkarsh');
console.log(dir.getRootDirectory());