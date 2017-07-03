import { MargaretwebPage } from './app.po';

describe('margaretweb App', () => {
  let page: MargaretwebPage;

  beforeEach(() => {
    page = new MargaretwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
