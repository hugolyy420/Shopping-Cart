import { useEffect } from 'react';
import Card from './Card';
import ReactPaginate from 'react-paginate';

const Pagination = ({ filteredProducts, itemsPerPage, setItemOffset, itemOffset }) => {
  const endOffset = itemOffset + itemsPerPage;
  const currentProducts = [...filteredProducts].slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentProducts]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg">
        {currentProducts?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="flex gap-4 w-full justify-center"
        pageClassName="flex items-center border-2 hover:bg-slate-300"
        previousClassName="flex items-center border-2 hover:bg-slate-300"
        nextClassName="flex items-center border-2 hover:bg-slate-300"
        pageLinkClassName="p-2"
        previousLinkClassName="p-2"
        nextLinkClassName="p-2"
        activeClassName="bg-slate-300"
        disabledLinkClassName="text-slate-400"
      />
    </>
  );
};

export default Pagination;
