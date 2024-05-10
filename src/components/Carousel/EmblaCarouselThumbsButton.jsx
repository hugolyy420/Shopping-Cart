import React from 'react';

export const Thumb = (props) => {
  const { selected, index, onClick, images } = props;

  return (
    <div className={'embla-thumbs__slide'.concat(selected ? ' embla-thumbs__slide--selected' : '')}>
      <button onClick={onClick} type="button" className="embla-thumbs__slide__number">
        <img className="embla__slide__img" src={images[index]} alt="" />
      </button>
    </div>
  );
};
