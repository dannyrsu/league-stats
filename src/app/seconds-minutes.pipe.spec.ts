import { SecondsMinutesPipe } from './seconds-minutes.pipe';

describe('SecondsMinutesPipe', () => {
  it('create an instance', () => {
    const pipe = new SecondsMinutesPipe();
    expect(pipe).toBeTruthy();
  });
});
