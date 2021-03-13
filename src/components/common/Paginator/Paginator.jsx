import c from './Paginator.module.css';

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }

    return (
        <div>
            {pages.map(pageNum => {
                return <span onClick={() => props.setCurrentPage(pageNum)}
                             className={(props.currentPage === pageNum && c.selected) + ' ' + c.paginationItem}>
                                {pageNum}</span>
            })}
        </div>
    )
}

export default Paginator;