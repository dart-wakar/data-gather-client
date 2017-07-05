import { DataGatherPage } from './app.po';

describe('data-gather App', () => {
  let page: DataGatherPage;

  beforeEach(() => {
    page = new DataGatherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
