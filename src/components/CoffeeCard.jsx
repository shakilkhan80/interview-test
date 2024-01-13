const ModalCompo = ({ data, setModal }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <div className="flex justify-between w-full p-4">
        <div>
          <h2 className="card-title">Name: {data + 1} </h2>
        </div>
        <div className="card-actions justify-end">
          <button
            className="bg-red-600 rounded-md px-2 text-white py-1"
            onClick={() => {
              setModal(null);
            }}
          >
            Close Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCompo;
