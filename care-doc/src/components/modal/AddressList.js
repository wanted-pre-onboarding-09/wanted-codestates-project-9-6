import React from 'react';
import AddressItem from './AddressItem';

import styles from '../../css/AddressList.module.css';

const addresses = [
  {
    id: 1,
    new: '서울특별시 강남구 테헤란로77길 6 (삼성동)',
    old: '서울특별시 강남구 삼성동 144-21',
    number: '06158',
  },
  {
    id: 2,
    new: '서울특별시 강남구 테헤란로77길 7 (삼성동)',
    old: '서울특별시 강남구 삼성동 143-28 동원빌딩',
    number: '06159',
  },
  {
    id: 3,
    new: '서울특별시 강남구 테헤란로77길 6 (삼성동, 우정에쉐르2)',
    old: '서울특별시 강남구 삼성동 144-10 삼성동 우정에쉐르2',
    number: '06158',
  },
  {
    id: 4,
    new: '서울특별시 강남구 테헤란로77길 9 (삼성동)',
    old: '서울특별시 강남구 삼성동 143-27',
    number: '06159',
  },
  {
    id: 5,
    new: '서울특별시 강남구 테헤란로77길 10 (삼성동)',
    old: '서울특별시 강남구 삼성동 143-26',
    number: '06160',
  },
];

const AddressList = () => {
  return (
    <div className={styles.ListContainer}>
      {addresses.map((address) => (
        <AddressItem
          key={address.id}
          newAddress={address.new}
          oldAddress={address.old}
          number={address.number}
        />
      ))}
    </div>
  );
};

export default AddressList;
