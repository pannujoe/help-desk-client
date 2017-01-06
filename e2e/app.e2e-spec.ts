import { HelpDeskClientPage } from './app.po';

describe('help-desk-client App', function() {
  let page: HelpDeskClientPage;

  beforeEach(() => {
    page = new HelpDeskClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
