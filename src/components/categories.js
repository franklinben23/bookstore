import React from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cate } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categoryType = cate();
  return (
    <button className="categories-button" type="button" onClick={() => { dispatch(categoryType); }}> Check Status </button>
  );
};

export default Categories;
