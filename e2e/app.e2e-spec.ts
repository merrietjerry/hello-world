import { ChurchngPage } from './app.po';

describe('churchng App', () => {
  let page: ChurchngPage;

  beforeEach(() => {
    page = new ChurchngPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
