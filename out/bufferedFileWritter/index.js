var BufferedFileWriter = /** @class */ (function () {
    /**
     * @param file File object
     * @param bufferSize Maximum buffer size
     */
    function BufferedFileWriter(file, bufferSize) {
        this.buffer = [];
        this.file = file;
        this.bufferSize = bufferSize;
        this.buffer = [];
    }
    BufferedFileWriter.prototype.write = function (data) {
        for (var i = 0; i < data.length; i++) {
            this.buffer.push(data[i]);
            if (this.buffer.length >= this.bufferSize) {
                this.file.write(this.buffer);
                this.buffer = [];
            }
        }
    };
    BufferedFileWriter.prototype.flush = function () {
        if (this.buffer.length > 0) {
            this.file.write(this.buffer);
            this.buffer = [];
        }
    };
    return BufferedFileWriter;
}());
var MockFile = /** @class */ (function () {
    function MockFile() {
    }
    MockFile.prototype.write = function (buf) {
        console.log("Writing to file:", buf.join(''));
        return buf.length;
    };
    return MockFile;
}());
var file = new MockFile();
var writer = new BufferedFileWriter(file, 5);
writer.write('hello');
//# sourceMappingURL=index.js.map