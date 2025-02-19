/**
 * Write a wrapper class for the file object which allows us to buffer the writes in-memory.
 * The wrapper class, BufferedFile is initialized with a File class object and a buffer size.
 * It has two methods: write and flush. The data should be flushed to disk when the buffer is full,
 * or on demand with a method called flush. All bytes must be stored in the buffer first before
 * being written to disk. The buffer cannot use more memory than the max bytes allowed.
 *
 *
 * Approach
 * - Buffer Management: Store data in a buffer (array of characters).
 * - Auto Flush: When the buffer reaches its maximum size, write it to disk.
 * - Manual Flush: The flush() method writes any remaining data to disk.
 * - File Output Interface: The FileOut interface simulates file operations.
 * 
 * Second part:
 * - Extend the BufferedFileWriter class to accept a 'numBytes' argument in the write method.
 */
interface FileOut {
  write(buf: string[]): number; // Writes buffer to file and returns bytes written
}

interface FileOutExtended {
  write(buf: string[], numBytes: number): number; // Writes buffer to file and returns bytes written
}

class BufferedFileWriter {
  private file: FileOut;
  private bufferSize: number;
  private buffer: string[] = [];

  /**
   * @param file File object
   * @param bufferSize Maximum buffer size
   */
  constructor(file: FileOut, bufferSize: number) {
    this.file = file;
    this.bufferSize = bufferSize;
    this.buffer = [];
  }

  write(data: string | string[]): void {
    for (let i = 0; i < data.length; i++) {
      this.buffer.push(data[i]);
      if (this.buffer.length >= this.bufferSize) {
        this.file.write(this.buffer);
        this.buffer = [];
      }
    }
  }

  flush(): void {
    if (this.buffer.length > 0) {
      this.file.write(this.buffer);
      this.buffer = [];
    }
  }
}


class BufferedFileWriterExtended {
    private file: FileOutExtended;          // File abstraction
    private buffer: string[];       // In-memory buffer
    private bufferSize: number;     // Max buffer size

    constructor(file: FileOutExtended, bufferSize: number) {
        this.file = file;
        this.bufferSize = bufferSize;
        this.buffer = [];
    }

    // Write method modified to accept 'numBytes' argument
    write(data: string, numBytes: number): void {
        // Add the data to the buffer until we have written 'numBytes'
        for (let i = 0; i < numBytes && i < data.length; i++) {
            this.buffer.push(data[i]);
            // If the buffer is full, flush it to the file
            if (this.buffer.length === this.bufferSize) {
                this.flush(); // Auto-flush when buffer is full
            }
        }
    }

    // Flush any remaining data in the buffer to the file
    flush(): void {
        if (this.buffer.length > 0) {
            this.file.write(this.buffer, this.buffer.length);  // Write all buffered bytes
            this.buffer = [];  // Clear the buffer
        }
    }
}

class MockFile implements FileOut {
  write(buf: string[]): number {
    console.log('Writing to file:', buf.join(''));
    return buf.length;
  }
}

const file = new MockFile();
const writer = new BufferedFileWriter(file, 5);
writer.write('hello');
writer.write('helloWorld');

console.log('\nCircular buffer approach\n');

class MockFile2 implements FileOutExtended {
    write(buf: string[], numBytes: number): number {
        const dataToWrite = buf.slice(0, numBytes).join('');
        console.log("Writing to file:", dataToWrite);
        return dataToWrite.length;  // Return the number of bytes written
    }
}

const file2 = new MockFile2();
const bufferedWriter2 = new BufferedFileWriterExtended(file2, 5);

// Write "HelloWorld" in chunks of 5 bytes
bufferedWriter2.write("HelloWorld", 5); // Writes 'Hello'
bufferedWriter2.write("World", 5);      // Writes 'World'
bufferedWriter2.flush(); // Ensure any remaining data is written
