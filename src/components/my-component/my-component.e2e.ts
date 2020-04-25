import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent("<my-component></my-component>");
    const element = await page.find('my-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders posts', async () => {
    const page = await newE2EPage();

    await page.setContent("<my-component src='obj' baseUrl='http://localhost:8000/'></my-component>");
    const component = await page.find('my-component');
    const element = await page.find('my-component >>> div');
    expect(element.textContent).toEqual(`title 1title 2title 3`);

    // component.setProperty('first', 'James');
    // await page.waitForChanges();
    // expect(element.textContent).toEqual(`Hello, World! I'm James`);

    // component.setProperty('last', 'Quincy');
    // await page.waitForChanges();
    // expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    // component.setProperty('middle', 'Earl');
    // await page.waitForChanges();
    // expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
