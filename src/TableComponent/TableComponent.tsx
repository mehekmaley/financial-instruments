import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import sampleData from '../data/sampleData.json'; 
import './TableComponent.css'; 
import { getColor, getPriceColor, orderCompare } from './TableComponentHelper';

interface FinancialInstrument {
  ticker: string;
  price: number;
  assetClass: string;
}

const TableComponent: React.FC = () => {
    const [data, setData] = useState<FinancialInstrument[]>(sampleData);
    const { t } = useTranslation();

    useEffect(() => {
        sortByAssetClass();
    }, []);

    const sortByAssetClass = () => {
      const sortedData = [...data].sort((a, b) =>
        {
            const order = { Equities: 1, Macro: 2, Credit: 3 };
            return orderCompare(a.assetClass, b.assetClass, order);
        }
      );
      setData(sortedData);
    };
  
    const sortByPrice = () => {
      const sortedData = [...data].sort((a, b) => b.price - a.price);
      setData(sortedData);
    };
  
    const sortByTicker = () => {
      const sortedData = [...data].sort((a, b) =>
        a.ticker.localeCompare(b.ticker)
      );
      setData(sortedData);
    };
    
    const displayScreen = () => {
        return (
            <div>
                <table className='Base-tableComponent'>
                    <thead>
                        <tr>
                            <th className='Base-tableHeader' onClick={sortByAssetClass}>{t('tableHeaders.assetClass')}</th>
                            <th className='Base-tableHeader' onClick={sortByPrice}>{t('tableHeaders.price')}</th>
                            <th className='Base-tableHeader' onClick={sortByTicker}>{t('tableHeaders.ticker')}</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map((instrument) => (
                        <tr key={instrument.ticker+'_'+`${index}`} style={{ background: getColor(instrument.assetClass) }}>
                            <td>{instrument.assetClass}</td>
                            <td style={{ color: getPriceColor(instrument.price)}}>{instrument.price}</td>
                            <td>{instrument.ticker}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
  
    return (
        data.length === 0 ? <>{t('loading')}...</> : displayScreen()
    );
  };
  
  export default TableComponent;
  
