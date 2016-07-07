import { ProductionMapConsolePage } from './app.po';

describe('production-map-console App', function() {
  let page: ProductionMapConsolePage;

  beforeEach(() => {
    page = new ProductionMapConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
