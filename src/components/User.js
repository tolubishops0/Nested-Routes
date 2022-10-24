import React, { useState, useEffect } from "react";
import axios from "axios";
import Names from "./Name";
import Pagination from "./Pagination";

export default function User() {
  const [batch, setBatch] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [batchPerPage] = useState(5);

  useEffect(() => {
    const fetchBatch = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://randomuser.me/api/?results=30"
        );
        setBatch(response.data.results);
        setLoading(false);
      } catch (error) {
        alert(error.massage);
      }
    };
    fetchBatch();
  }, []);

  const getIndexOfLastBatch = currentPage * batchPerPage;
  const getIndexOfFisrtBatch = getIndexOfLastBatch - batchPerPage;
  const currentPost = batch.slice(getIndexOfFisrtBatch, getIndexOfLastBatch);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Names names={currentPost} loading={loading} />
      <Pagination
        namePerPage={batchPerPage}
        totalName={batch.length}
        paginate={paginate}
      />
    </div>
  );
}
