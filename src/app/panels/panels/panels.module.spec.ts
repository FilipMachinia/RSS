import {PanelsModule} from './panels.module';

describe('PanelsModule', () => {
  let panelsModule: PanelsModule;

  beforeEach(() => {
    panelsModule = new PanelsModule();
  });

  it('should create an instance', () => {
    expect(panelsModule).toBeTruthy();
  });
});
