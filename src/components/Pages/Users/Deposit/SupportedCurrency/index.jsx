import React, { useMemo, useState } from 'react';
import L from 'i18n-react';
import SupportedCurrencyItem from './SupportedCurrencyItem';
import SortButton from './SortButton';
import Loader from '../../../../Base/Loader';
import { sortingColumnTable } from '../../../../../services/helpers';
import EmptyTable from '../../../../Base/EmptyTable';

const SupportedCurrency = ({
  isLoading,
  title,
  labels,
  data,
  activeEl,
  onSelectItem,
}) => {
  const [sort, setSort] = useState({ sort: 'desc', order: 'name' });
  const [search, setSearch] = useState('');
  const [wallets, setWallets] = useState([]);

  useMemo(
    () => sortingColumnTable({ sort, data, setState: setWallets }),
    [sort, data],
  );

  // Check data
  if (isLoading) return <Loader />;
  if (!data || !data.length)
    return (
      <EmptyTable
        text={L.translate('Pages.Users.Deposit.SupportedCurrency.item1')}
      />
    );

  const toggleSort = e => {
    const { order, sort } = e;
    setSort({ order, sort });
  };

  const filterWallets = data
    .filter(currency => {
      if (search !== '') {
        return (
          currency?.asset?.name
            ?.toLowerCase()
            .includes(search?.toLowerCase()) ||
          currency?.asset?.code?.toLowerCase().includes(search?.toLowerCase())
        );
      }
      return true;
    })
    .map(currency => (
      <SupportedCurrencyItem
        key={currency.asset.id}
        onSelectItem={onSelectItem}
        selected={activeEl === currency.asset.id}
        {...currency}
      />
    ));

  const handleSearchValue = e => {
    setSearch(e.target.value.toLowerCase());
  };

  const [title1, title2, title3, title4] = labels;

  return (
    <>
      <div className="transfer-panel">
        <p className="item-title item-title--bigger">{title}</p>

        <div className="transfer-search">
          <div className="field-wrap">
            <input
              type="text"
              className="input input--icon-right"
              placeholder={L.translate(
                'Pages.Users.Deposit.SupportedCurrency.item3',
              )}
              value={search}
              onChange={handleSearchValue}
            />

            <span className="field-icon">
              <svg
                className="fill"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.04938 16.0928C9.83702 16.0928 11.5735 15.4963 12.9838 14.3977L18.3045 19.7191C18.7019 20.103 19.3353 20.092 19.7192 19.6945C20.0936 19.3067 20.0936 18.6919 19.7192 18.3042L14.3985 12.9828C17.1243 9.47344 16.4895 4.41858 12.9807 1.69241C9.47196 -1.03376 4.41791 -0.398932 1.69215 3.11039C-1.03361 6.61971 -0.398872 11.6746 3.10992 14.4007C4.52252 15.4983 6.26058 16.0937 8.04938 16.0928ZM3.77429 3.77179C6.13538 1.4103 9.96347 1.41025 12.3246 3.7717C14.6857 6.13315 14.6858 9.96181 12.3247 12.3233C9.9636 14.6848 6.13551 14.6848 3.77438 12.3234C3.77434 12.3234 3.77434 12.3234 3.77429 12.3233C1.4132 9.97906 1.39929 6.16436 3.74318 3.80291C3.75354 3.79251 3.76389 3.78215 3.77429 3.77179Z"
                  fill="#969696"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="coins-table-box">
        <div className="coin-table">
          <div className="table-header">
            <div className="tr">
              <div className="td">
                <div className="td-name td-name--type2">{title1}</div>

                <SortButton toggleSort={toggleSort} sort={sort} order="name" />
              </div>

              <div className="td">
                <div className="td-name td-name--type2">
                  {title2}

                  <SortButton toggleSort={toggleSort} sort={sort} order="id" />
                </div>
              </div>

              <div className="td">
                <div className="td-name td-name--type2">
                  {title3}

                  <SortButton
                    toggleSort={toggleSort}
                    sort={sort}
                    order="balance"
                  />
                </div>
              </div>

              <div className="td">
                <div className="td-name td-name--type2">
                  {title4}

                  <SortButton
                    toggleSort={toggleSort}
                    sort={sort}
                    order="frozen_balance"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="table-body">
            {filterWallets.length ? (
              filterWallets
            ) : (
              <p style={{ padding: '20px 0', textAlign: 'center' }}>
                {L.translate('Pages.Users.Deposit.SupportedCurrency.item2')}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportedCurrency;
