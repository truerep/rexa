import React from 'react'
import UsersList from './UsersList'
import { useRouter } from 'next/router'
import { getAllUsers } from '@/api';
import toast from 'react-hot-toast';

const UsersListContainer = () => {
  const router = useRouter();
  const [usersData, setUsersData] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    getUsersList();
  }, [router])

  const getUsersList = async (page) => {
    try {
      const res = await getAllUsers(page ?? currentPage);
      if (res?.data) {
        setUsersData(res.data?.users);
        setTotalCount(res.data?.totalCount);
        setTotalPages(res.data?.totalPages);
        setCurrentPage(res.data?.currentPage);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || 'Something went wrong');
    }
  }

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    getUsersList(page);
  }

  return (
    <UsersList usersData={usersData} totalCount={totalCount} totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
  )
}

export default UsersListContainer