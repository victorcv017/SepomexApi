import { FunctionalModule } from './functional.module';

describe('FunctionalModule', () => {
  let functionalModule: FunctionalModule;

  beforeEach(() => {
    functionalModule = new FunctionalModule();
  });

  it('should create an instance', () => {
    expect(functionalModule).toBeTruthy();
  });
});
