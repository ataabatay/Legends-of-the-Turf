import Pagination from 'react-bootstrap/Pagination';

export default function Pagetoggle({nPages, currentPage, setCurrentPage}) {

  // All the page numbers array to use as reference on the pagination component
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1)


  // Handle click and set the current page to the page clicked
  let active = currentPage

  const handleClick = (e) => {
    setCurrentPage(parseInt(e.target.text))
    active = currentPage
  }

  return (
    <>
      <div>
        <Pagination>
          {pageNumbers.map(pageNumber => {
            return <Pagination.Item 
            key={pageNumber}
            onClick={handleClick}
            active={pageNumber === active}
            >
              {pageNumber}
            </Pagination.Item>
          })}
        </Pagination>
      </div>
    </>
  )
}