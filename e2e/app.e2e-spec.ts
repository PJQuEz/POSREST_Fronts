import { PosrestPage } from './app.po';

describe('posrest App', () => {
  let page: PosrestPage;

  beforeEach(() => {
    page = new PosrestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
