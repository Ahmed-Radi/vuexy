import React from 'react'
import ReactPaginate from 'react-paginate';

function Paginate({ pageCount, currentItems, handlePageClick }) {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    {pageCount && currentItems.length !== 0 ? <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        pageCount={pageCount ? pageCount : 9}
                        previousLabel="<"
                        renderOnZeroPageCount={true}
                        containerClassName='pagination justify-content-center'
                        pageClassName='page-item'
                        pageLinkClassName='page-link'
                        previousClassName='page-item'
                        previousLinkClassName='page-link'
                        nextClassName='page-item'
                        nextLinkClassName='page-link'
                        breakClassName='page-item'
                        breakLinkClassName='page-link'
                        activeClassName='active'
                    /> : ''}
                </div>
            </div>
        </>
    )
}

export default Paginate