import React from 'react';
// import { mount } from 'enzyme';
// import toJson from 'enzyme-to-json';
import { fireEvent, getByTestId, render } from '@testing-library/react';
import TableComponent from './TableComponent';

jest.mock('react-i18next', () => {
  const appEn = {
    financialInstrumentsTable: 'Financial Instruments Table',
    loading: 'Loading',
    tableHeaders: {
        assetClass: 'Asset Class',
        price: 'Price',
        ticker: 'Ticker',
    }
  }
  return {
    useTranslation: () => {
      return {
        t: (str: string) => str.split('.').reduce((o:any, i) => o[i], appEn)
      }
    }
  }
});

describe('TableComponent', () => {
  test('renders loading message when data is empty', () => {
    const wrapper = render(<TableComponent />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders correctly with mock data', () => {
    const mockData = [
      { ticker: 'ALPHA', price: 150.0, assetClass: 'Equities' },
      { ticker: 'BETA', price: 2500.0, assetClass: 'Macro' },
      { ticker: 'GAMMA', price: 300.0, assetClass: 'Credit' },
    ];

    jest.spyOn(React, 'useState').mockReturnValueOnce([mockData, jest.fn()]);

    const wrapper = render(<TableComponent />);
    expect(wrapper).toMatchSnapshot();
  });
}); 