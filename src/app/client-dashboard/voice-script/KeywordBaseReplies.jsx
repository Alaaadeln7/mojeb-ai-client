export default function KeywordBaseReplies() {
  return (
    <div className="bg-base-100 p-5 rounded-2xl mt-5 shadow-sm">
      <h1 className="text-xl font-bold my-5 ">Keyword-base Replies</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table table-zebra">
          <thead className="bg-base-300">
            <tr>
              <th>Keyword</th>
              <th>AI response</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>appointment</td>
              <td className="line-clamp-1">
                i've transferred you to our scheduling desk
              </td>
              <td>
                <button className="link link-primary">Edit</button>
              </td>
            </tr>
            <tr>
              <td>hours</td>
              <td className="line-clamp-1">
                Our Opening hours are at 9:00AM to 5:00PM daily
              </td>
              <td>
                <button className="link link-primary">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex gap-5 mt-5">
        <button className="btn btn-primary">Save Script</button>
        <button className="btn btn-soft">Restore Previous Version</button>
      </div>
    </div>
  );
}
