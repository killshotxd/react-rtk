import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/slices/UserSlice";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  const deleteAll = () => {
    dispatch(deleteUser(data));
  };

  return (
    <>
      <button
        className="btn btn-delete"
        onClick={() => {
          deleteAll();
        }}
      >
        Delete All
      </button>
    </>
  );
};

export default DeleteAllUser;
