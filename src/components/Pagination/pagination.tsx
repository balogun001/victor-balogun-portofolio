import React, { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import axios from 'axios';

const Pagination = () => {
  const linkClassName =
    'hover:bg-brand-compliment hover:text-brand-dominant50 cursor-pointer w-8 h-8 border rounded mt-2 flex items-center justify-center hover:opacity-80 border-brand-compliment mx-2';

  const [data, setData] = useState<any>(null);
  const [page, setPage] = useState(1);
  const totalPages = 5;

  const fetchData = (currentPage = 1) => {
    axios
      .get(`https://api.quotable.io/quotes?page=${currentPage}&limit=10`)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    setPage(currentPage);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data &&
        data.map((result: any, index: React.Key | null | undefined) => (
          <div key={index}>{result.content}</div>
        ))}
      <ResponsivePagination
        activeItemClassName={`${linkClassName} bg-brand-compliment text-brand-dominant50`}
        className="flex w-full items-center"
        current={page}
        disabledItemClassName="opacity-60 hover:opacity-60 cursor-auto"
        onPageChange={(currentpage) => fetchData(currentpage)}
        total={totalPages}
      />
    </>
  );
};

export default Pagination;
