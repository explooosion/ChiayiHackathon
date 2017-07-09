import { Gmap2Page } from './app.po';

describe('gmap2 App', () => {
  let page: Gmap2Page;

  beforeEach(() => {
    page = new Gmap2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
