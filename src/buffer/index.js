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
var BufferedFileWriterExtended = /** @class */ (function () {
    function BufferedFileWriterExtended(file, bufferSize) {
        this.file = file;
        this.bufferSize = bufferSize;
        this.buffer = [];
    }
    // Write method modified to accept 'numBytes' argument
    BufferedFileWriterExtended.prototype.write = function (data, numBytes) {
        // Add the data to the buffer until we have written 'numBytes'
        for (var i = 0; i < numBytes && i < data.length; i++) {
            this.buffer.push(data[i]);
            // If the buffer is full, flush it to the file
            if (this.buffer.length === this.bufferSize) {
                this.flush(); // Auto-flush when buffer is full
            }
        }
    };
    // Flush any remaining data in the buffer to the file
    BufferedFileWriterExtended.prototype.flush = function () {
        if (this.buffer.length > 0) {
            this.file.write(this.buffer, this.buffer.length); // Write all buffered bytes
            this.buffer = []; // Clear the buffer
        }
    };
    return BufferedFileWriterExtended;
}());
var MockFile = /** @class */ (function () {
    function MockFile() {
    }
    MockFile.prototype.write = function (buf) {
        console.log('Writing to file:', buf.join(''));
        return buf.length;
    };
    return MockFile;
}());
var file = new MockFile();
var writer = new BufferedFileWriter(file, 5);
writer.write('hello');
writer.write('helloWorld');
console.log('\nCircular buffer approach\n');
var MockFile2 = /** @class */ (function () {
    function MockFile2() {
    }
    MockFile2.prototype.write = function (buf, numBytes) {
        var dataToWrite = buf.slice(0, numBytes).join('');
        console.log("Writing to file:", dataToWrite);
        return dataToWrite.length; // Return the number of bytes written
    };
    return MockFile2;
}());
var file2 = new MockFile2();
var bufferedWriter2 = new BufferedFileWriterExtended(file2, 5);
// Write "HelloWorld" in chunks of 5 bytes
bufferedWriter2.write("HelloWorld", 5); // Writes 'Hello'
bufferedWriter2.write("World", 5); // Writes 'World'
bufferedWriter2.flush(); // Ensure any remaining data is written
