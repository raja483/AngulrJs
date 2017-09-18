import { HellowWorldPage } from './app.po';

describe('hellow-world App', function() {
  let page: HellowWorldPage;

  beforeEach(() => {
    page = new HellowWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
