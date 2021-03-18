import c from './Paginator.module.css';
import cn from 'classnames';

const Paginator = ({totalItemsCount, pageSize, currentPage, setCurrentPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }

    let leftPortionPageNumber = currentPage > 7 ? currentPage - 5 : 1;
    let rightPortionPageNumber = currentPage + 6 < pagesCount ? currentPage + 5 : totalItemsCount;

    let isFirstPageMustBe = leftPortionPageNumber > 1;
    let isLastPageMustBe = rightPortionPageNumber < totalItemsCount;

    let isLeftMediumPointMustBe = leftPortionPageNumber - 1 > 0;
    let isRightMediumPointMustBe = pagesCount - rightPortionPageNumber > 0;

    return (
        <div>
            {isFirstPageMustBe && <span onClick={() => setCurrentPage(1)} className={c.paginationItem}>1</span>}

            {isLeftMediumPointMustBe && <span onClick={() => setCurrentPage(Math.ceil((leftPortionPageNumber + 1) / 2))}
                                              className={c.paginationItem}>...</span>}

            {pages
                .filter(pageNum => pageNum >= leftPortionPageNumber && pageNum <= rightPortionPageNumber)
                .map(pageNum => {
                    return <span onClick={() => setCurrentPage(pageNum)}
                                 className={cn({[c.selected]: currentPage === pageNum}, c.paginationItem)}>
                                {pageNum}</span>
                })}

            {isRightMediumPointMustBe &&
            <span onClick={() => setCurrentPage(Math.ceil((pagesCount + rightPortionPageNumber) / 2))}
                  className={c.paginationItem}>...</span>}

            {isLastPageMustBe &&
            <span onClick={() => setCurrentPage(pagesCount)} className={c.paginationItem}>{pagesCount}</span>}
        </div>
    )
}

export default Paginator;