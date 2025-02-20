import { describe, expect, it, test } from 'bun:test';
import { processStream, processStreamImprovedUsingTries } from '.';

describe('queryLandQ', () => {
    const full_stream = [
        'Q: database',
        'Q: Stacktrace',
        'Q: loading failed',
        'L: Database service started',
        'Q: snapshot loading',
        'Q: fail',
        'L: Started processing events',
        'L: Loading main DB snapshot',
        'L: Loading snapshot failed no stacktrace available',
      ];
      const expected_output = [
        'ACK: database; ID=1',
        'ACK: Stacktrace; ID=2',
        'ACK: loading failed; ID=3',
        'M: Database service started; Q=1',
        'ACK: snapshot loading; ID=4',
        'ACK: fail; ID=5',
        'M: Loading main DB snapshot; Q=4',
        'M: Loading snapshot failed no stacktrace available; Q=2,3,4',
      ];
      const simple_stream = [
        'Q: snapshot loading',
        'L: Loading snapshot failed no stacktrace available',
      ]
      const expected_output_simple_stream = [
        'ACK: snapshot loading; ID=1',
        'M: Loading snapshot failed no stacktrace available; Q=1'

      ]
  describe('processStream', () => {
    it('should return the correct output when the order is not the correct', () => {
      const output = processStream(simple_stream);
      expect(output).toStrictEqual(expected_output_simple_stream);
     
    });
    
    it('should return the correct output', () => {
      const output = processStream(full_stream);
      expect(output).toStrictEqual(expected_output);
    });
  });

  describe('processStreamImprovedUsingTries', () => {
    it('should return the correct output when the order is not the correct', () => {
      const output = processStreamImprovedUsingTries(simple_stream);
      expect(output).toStrictEqual(expected_output_simple_stream);
    });
    
    it('should return the correct output', () => {
      const output = processStreamImprovedUsingTries(full_stream);
      expect(output).toStrictEqual(expected_output);
    });
  });
});
