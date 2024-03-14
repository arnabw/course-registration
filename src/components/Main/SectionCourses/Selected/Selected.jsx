const Selected = () => {
  return (
    <div className="bg-white rounded-xl p-6 lg:w-[600px] max-h-96 overflow-y-auto">
      <h2 className="text-[#2F80ED] font-bold text-lg">
        Credit Hour Remaining 7 hr
      </h2>
      <div className="my-4 py-4 border-y-2">
        <h3 className="text-xl font-bold text-[#1C1B1B]">Course Name</h3>
        <ul className="list-decimal text-[#1C1B1B] text-base"></ul>
      </div>
      <h3 className="text-base font-medium text-[#1C1B1B] pb-4 border-b-2">
        Total Credit Hour : 13
      </h3>
      <h3 className="text-[#1C1B1B] font-semibold text-base pt-4">
        Total Price : 48000 USD
      </h3>
    </div>
  );
};

export default Selected;
