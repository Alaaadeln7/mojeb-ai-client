export default function KeywordBaseReplies({
  chatbot,
  setOpenUpdateKeyword,
  setSelectInquiry,
}) {
  return (
    <div className="bg-base-100 p-5 rounded-2xl mt-5 shadow-sm">
      <h3 className="text-2xl font-semibold bg-gradient-to-r from-[#10a5b1] to-[#3d4d58] bg-clip-text text-transparent">
        Keyword-base Replies
      </h3>
      <div className="rounded-box border border-base-content/5 bg-base-100">
        {/* Desktop/Large Screen View (default table) */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="table table-zebra">
            <thead className="bg-base-300">
              <tr>
                <th>Keyword</th>
                <th>AI response</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {chatbot?.map((item) => (
                <tr>
                  <td>{item?.keyword}</td>
                  <td className="line-clamp-1">{item?.answer}</td>
                  <td>
                    <button
                      onClick={() => {
                        setOpenUpdateKeyword(true);
                        setSelectInquiry(item);
                      }}
                      className="link link-primary"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile/Small Screen View (card layout) */}
        <div className="sm:hidden space-y-2 p-2">
          {chatbot?.map((item) => (
            <div className="card bg-base-100 shadow-sm border border-base-content/10 p-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold">{item?.keyword}</div>
                  <div className="text-sm line-clamp-2 mt-1">
                    {item?.answer}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setOpenUpdateKeyword(true);
                    setSelectInquiry(item);
                  }}
                  className="link link-primary text-sm"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <button className="btn btn-primary">Save Script</button>
        <button className="btn btn-soft">Restore Previous Version</button>
      </div>
    </div>
  );
}
